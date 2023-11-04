import { Router } from "express";
import passport from "../lib/passport";
import { isValidToken } from "../utils/middlewares";
import authController from "../controllers/auth.controller";

const auth = Router();

auth.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

auth.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  authController.googleCallback
);

auth.get("/success", isValidToken, authController.success);
auth.get("/failure", authController.failure);

export default auth;
