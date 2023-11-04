import express, { Application } from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import passport from "../lib/passport";
import { handleClientErrors, handleServerErrors } from "../utils/middlewares";

import auth from "../routes/auth";
import base from "../routes/base";
import baseController from "../controllers/base.controller";

const app: Application = express();

app.use(
  morgan(
    ":remote-addr  :method :url :status :res[content-length] - :response-time ms"
  )
);
app.use(cookieParser());
app.use(passport.initialize());

app.use("/", base);
app.use("/auth", auth);

app.use("*", baseController.notFound);

//error middlewares
app.use(handleClientErrors);
app.use(handleServerErrors);

export default app;
