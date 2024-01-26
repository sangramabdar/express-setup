import { Router } from "express";
import { baseController } from "../controllers";

const baseRouter = Router();

baseRouter.get("/", baseController.get);

export { baseRouter };
