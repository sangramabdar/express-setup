import { Router } from "express";
import passport from "../lib/passport";
import { isValidToken } from "../utils/middlewares";
import { authController } from "../controllers";

const authRouter = Router();

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  authController.googleCallback
);

authRouter.get("/success", isValidToken, authController.success);
authRouter.get("/failure", authController.failure);

export { authRouter };
