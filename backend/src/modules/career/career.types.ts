export interface CareerApplicationInput {
  fullName: string;
  email: string;
  phone: string;
  reason: string;
  position: string | null;
}

export interface UploadedResumeFile {
  buffer: Buffer;
  originalName: string;
  mimeType: string;
  size: number;
}

export interface CloudinaryUploadResult {
  secureUrl: string;
  publicId: string;
  format: string;
  bytes: number;
  originalFilename: string;
}

export interface SubmitApplicationResult {
  id: number;
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export interface ValidatedCareerApplication extends ValidationResult {
  data: CareerApplicationInput | null;
}
