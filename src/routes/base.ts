import { Router } from "express";
import { baseController } from "../controllers";

const baseRouter = Router();

baseRouter.get("/", baseController.get);
baseRouter.use("*", baseController.notFound);

export { baseRouter };
