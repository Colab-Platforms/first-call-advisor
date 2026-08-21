/**
 * Confirms a buffer's leading bytes match the container format implied by its
 * extension — a real PDF/zip(DOCX)/OLE(DOC) container, not a renamed arbitrary
 * file. This is defense-in-depth alongside MIME/extension checks, not a
 * guarantee the content is a well-formed Word document (DOCX/DOC signatures
 * are shared with other zip/OLE-based formats).
 */
export type ResumeExtension = "pdf" | "doc" | "docx";

const PDF_SIGNATURE = [0x25, 0x50, 0x44, 0x46]; // %PDF
const ZIP_SIGNATURE = [0x50, 0x4b, 0x03, 0x04]; // PK\x03\x04 (docx is a zip container)
const OLE_SIGNATURE = [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]; // legacy .doc

function startsWith(buffer: Buffer, signature: number[]): boolean {
  if (buffer.length < signature.length) return false;
  return signature.every((byte, index) => buffer[index] === byte);
}

export function getFileExtension(filename: string): string {
  const parts = filename.toLowerCase().split(".");
  return parts.length > 1 ? (parts.pop() as string) : "";
}

export function matchesResumeSignature(buffer: Buffer, extension: ResumeExtension): boolean {
  switch (extension) {
    case "pdf":
      return startsWith(buffer, PDF_SIGNATURE);
    case "docx":
      return startsWith(buffer, ZIP_SIGNATURE);
    case "doc":
      return startsWith(buffer, OLE_SIGNATURE);
    default:
      return false;
  }
}
