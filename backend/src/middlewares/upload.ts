import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { sendResponse } from "../utils/responseUtils.js";
import STATUS_CODES from "../utils/statusCodes.js";
import { matchesResumeSignature, getFileExtension, ResumeExtension } from "../utils/fileSignature.js";

const MAX_RESUME_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const EXTENSION_BY_MIME: Record<string, ResumeExtension> = {
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
};

const ALLOWED_EXTENSIONS = new Set(["pdf", "doc", "docx"]);

class InvalidResumeError extends Error {}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_RESUME_SIZE_BYTES, files: 1 },
  fileFilter: (_req, file, callback) => {
    const extension = getFileExtension(file.originalname);
    if (!ALLOWED_MIME_TYPES.has(file.mimetype) || !ALLOWED_EXTENSIONS.has(extension)) {
      callback(new InvalidResumeError("Resume must be a PDF, DOC, or DOCX file."));
      return;
    }
    callback(null, true);
  },
});

const uploadSingleResume = upload.single("resume");

export function uploadResume(req: Request, res: Response, next: NextFunction): void {
  uploadSingleResume(req, res, (err: unknown) => {
    if (err instanceof multer.MulterError) {
      const message =
        err.code === "LIMIT_FILE_SIZE" ? "Resume must be 10MB or smaller." : "Resume upload failed.";
      sendResponse(res, false, null, message, STATUS_CODES.BAD_REQUEST);
      return;
    }
    if (err instanceof InvalidResumeError) {
      sendResponse(res, false, null, err.message, STATUS_CODES.BAD_REQUEST);
      return;
    }
    if (err) {
      next(err);
      return;
    }

    if (!req.file) {
      sendResponse(res, false, null, "Resume file is required.", STATUS_CODES.BAD_REQUEST);
      return;
    }

    const extension = getFileExtension(req.file.originalname);
    const expectedExtension = EXTENSION_BY_MIME[req.file.mimetype];
    if (!expectedExtension || extension !== expectedExtension || !matchesResumeSignature(req.file.buffer, expectedExtension)) {
      sendResponse(res, false, null, "Resume file content does not match its declared type.", STATUS_CODES.BAD_REQUEST);
      return;
    }

    next();
  });
}
