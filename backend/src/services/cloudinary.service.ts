import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";
import { CloudinaryUploadResult, UploadedResumeFile } from "../modules/career/career.types.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const CAREER_RESUME_FOLDER = "career/resumes";

export function uploadResume(file: UploadedResumeFile): Promise<CloudinaryUploadResult> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: "raw",
        folder: CAREER_RESUME_FOLDER,
        filename_override: file.originalName,
        use_filename: true,
        unique_filename: true,
      },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error("Cloudinary upload returned no result."));
          return;
        }
        resolve({
          secureUrl: result.secure_url,
          publicId: result.public_id,
          format: result.format ?? "",
          bytes: result.bytes,
          originalFilename: file.originalName,
        });
      },
    );

    Readable.from(file.buffer).pipe(uploadStream);
  });
}

export async function deleteResume(publicId: string): Promise<void> {
  await cloudinary.uploader.destroy(publicId, { resource_type: "raw" });
}
