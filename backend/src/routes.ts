
import { Router } from "express";
import { Request, Response } from "express";
import { sendResponse } from "./utils/responseUtils";
import STATUS_CODES from "./utils/statusCodes";
import careerRoutes from "./modules/career/career.route.js";
const router = Router();

router.get("/", (_req: Request, res: Response) => {
  sendResponse(res, true, "", "Welcome to the Backend!", STATUS_CODES.OK);
});

//Call other modules routes here
router.use("/careers", careerRoutes);

export default router;
