import { CareerApplicationInput, ValidatedCareerApplication } from "./career.types.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,20}$/;

const MAX_NAME_LENGTH = 120;
const MAX_PHONE_LENGTH = 20;
const MAX_REASON_LENGTH = 2000;
const MAX_POSITION_LENGTH = 150;

export function validateCareerApplication(body: Record<string, unknown>): ValidatedCareerApplication {
  const errors: string[] = [];

  const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
  if (!fullName) {
    errors.push("Full name is required.");
  } else if (fullName.length > MAX_NAME_LENGTH) {
    errors.push(`Full name must be ${MAX_NAME_LENGTH} characters or fewer.`);
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email) {
    errors.push("Email address is required.");
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push("Email address is invalid.");
  }

  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  if (!phone) {
    errors.push("Phone number is required.");
  } else if (phone.length > MAX_PHONE_LENGTH || !PHONE_REGEX.test(phone)) {
    errors.push("Phone number is invalid.");
  }

  const reason = typeof body.reason === "string" ? body.reason.trim() : "";
  if (!reason) {
    errors.push("Please tell us why you want to work with us.");
  } else if (reason.length > MAX_REASON_LENGTH) {
    errors.push(`Reason must be ${MAX_REASON_LENGTH} characters or fewer.`);
  }

  const rawPosition = typeof body.position === "string" ? body.position.trim() : "";
  if (rawPosition.length > MAX_POSITION_LENGTH) {
    errors.push(`Position must be ${MAX_POSITION_LENGTH} characters or fewer.`);
  }
  const position = rawPosition.length > 0 ? rawPosition : null;

  if (errors.length > 0) {
    return { valid: false, errors, data: null };
  }

  const data: CareerApplicationInput = { fullName, email, phone, reason, position };
  return { valid: true, errors: [], data };
}
