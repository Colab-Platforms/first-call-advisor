import { Router } from "express";
import rateLimit from "express-rate-limit";
import { uploadResume } from "../../middlewares/upload.js";
import { apply } from "./career.controller.js";

const router = Router();

const careerApplyRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { status: false, data: null, message: "Too many applications submitted. Please try again later." },
});

router.post("/apply", careerApplyRateLimiter, uploadResume, apply);

export default router;
