import { Router } from "express";
import baseController from "../controllers/base.controller";

const base = Router();

base.get("/", baseController.get);
base.use("*", baseController.notFound);

export default base;
