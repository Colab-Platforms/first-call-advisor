import nodemailer, { Transporter } from "nodemailer";
import { CareerApplicationInput, CloudinaryUploadResult } from "../modules/career/career.types.js";

interface MailMessage {
  to: string;
  subject: string;
  html: string;
}

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 10_000,
    });
  }
  return transporter;
}

async function sendMail(message: MailMessage): Promise<void> {
  await getTransporter().sendMail({
    from: process.env.EMAIL_FROM,
    to: message.to,
    subject: message.subject,
    html: message.html,
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendCareerApplicationNotification(
  application: CareerApplicationInput,
  resume: CloudinaryUploadResult,
): Promise<void> {
  const hrEmail = process.env.HR_NOTIFICATION_EMAIL;
  if (!hrEmail) {
    throw new Error("HR_NOTIFICATION_EMAIL is not configured.");
  }

  const html = `
    <h2>New Career Application</h2>
    <p><strong>Full Name:</strong> ${escapeHtml(application.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(application.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(application.phone)}</p>
    <p><strong>Position:</strong> ${escapeHtml(application.position ?? "General application")}</p>
    <p><strong>Why they want to work with us:</strong><br />${escapeHtml(application.reason)}</p>
    <p><strong>Resume:</strong> <a href="${resume.secureUrl}">View Resume</a></p>
  `;

  await sendMail({
    to: hrEmail,
    subject: `New Career Application: ${application.fullName}`,
    html,
  });
}
