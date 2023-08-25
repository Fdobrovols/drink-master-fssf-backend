import express from "express";

import userControllers from "../../../controllers/auth-controllers/index.js";
import { validateBody } from "../../../decorators/index.js";
import joiSchemas from "../../../schemas/users-schemas/index.js";
import { authenticate, upload } from "../../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(joiSchemas.userSignupSchema),
  userControllers.registerUser
);

authRouter.post("/login", validateBody(joiSchemas.userLoginSchema), userControllers.loginUser);

// authRouter.get("/verify/:verificationToken", verifyUser);

// authRouter.post("/verify", validateBody(verifyEmailSchema, bedRequestBodyMsg), resendVerifyEmail);

authRouter.post("/logout", authenticate, userControllers.logoutUser);

authRouter.get("/current", authenticate, userControllers.getCurrentUser);

authRouter.patch(
  "/subscribe",
  authenticate,
  validateBody(joiSchemas.updateSubscriptionSchema),
  userControllers.updateSubscription
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  userControllers.updateAvatar
);

export default authRouter;
