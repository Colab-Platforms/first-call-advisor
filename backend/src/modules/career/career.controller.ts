import { Request, Response, NextFunction } from "express";
import { sendResponse } from "../../utils/responseUtils.js";
import STATUS_CODES from "../../utils/statusCodes.js";
import { validateCareerApplication } from "./career.validators.js";
import { submitApplication } from "./career.service.js";
import { UploadedResumeFile } from "./career.types.js";

export async function apply(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const validation = validateCareerApplication(req.body ?? {});
    if (!validation.valid || !validation.data) {
      sendResponse(res, false, { errors: validation.errors }, validation.errors[0], STATUS_CODES.BAD_REQUEST);
      return;
    }

    if (!req.file) {
      sendResponse(res, false, null, "Resume file is required.", STATUS_CODES.BAD_REQUEST);
      return;
    }

    const resumeFile: UploadedResumeFile = {
      buffer: req.file.buffer,
      originalName: req.file.originalname,
      mimeType: req.file.mimetype,
      size: req.file.size,
    };

    const result = await submitApplication(validation.data, resumeFile);

    sendResponse(res, true, { id: result.id }, "Application submitted successfully", STATUS_CODES.CREATED);
  } catch (error) {
    next(error);
  }
}
