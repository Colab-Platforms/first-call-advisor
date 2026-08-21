import prisma from "@root/prisma.js";
import * as cloudinaryService from "../../services/cloudinary.service.js";
import * as emailService from "../../services/email.service.js";
import { getFileExtension } from "../../utils/fileSignature.js";
import { CareerApplicationInput, SubmitApplicationResult, UploadedResumeFile } from "./career.types.js";

export async function  submitApplication(
  input: CareerApplicationInput,
  resumeFile: UploadedResumeFile,
): Promise<SubmitApplicationResult> {
  let uploadResult;
  try {
    uploadResult = await cloudinaryService.uploadResume(resumeFile);
  } catch (uploadError) {
    console.error("[Career] Failed to upload resume to Cloudinary:", uploadError);
    throw new Error("We couldn't upload your resume. Please try again.");
  }

  try {
    const application = await prisma.careerApplication.create({
      data: {
        fullName: input.fullName,
        email: input.email,
        phone: input.phone,
        reason: input.reason,
        position: input.position,
        resumeUrl: uploadResult.secureUrl,
        resumePublicId: uploadResult.publicId,
        resumeFileName: resumeFile.originalName,
        resumeFormat: uploadResult.format || getFileExtension(resumeFile.originalName),
        resumeSize: resumeFile.size,
      },
      select: { id: true },
    });

    try {
      await emailService.sendCareerApplicationNotification(input, uploadResult);
    } catch (emailError) {
      console.error("[Career] Failed to send HR notification email:", emailError);
    }

    return { id: application.id };
  } catch (dbError) {
    console.error("[Career] Failed to save application after resume upload:", dbError);
    try {
      await cloudinaryService.deleteResume(uploadResult.publicId);
    } catch (cleanupError) {
      console.error("[Career] Failed to clean up orphaned Cloudinary resume:", uploadResult.publicId, cleanupError);
    }
    throw new Error("We couldn't submit your application. Please try again.");
  }
}
