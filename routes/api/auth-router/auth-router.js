import express from "express";

import {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateSubscription,
  updateAvatar,
  verifyUser,
  resendVerifyEmail,
} from "../../../controllers/auth-controllers";
import { validateBody } from "../../../decorators";
import {
  userSignupSchema,
  userLoginSchema,
  updateSubscriptionSchema,
  verifyEmailSchema,
} from "../../../schemas/users-schemas";
import { authenticate, upload } from "../../../middlewares";

const authRouter = express.Router();

authRouter.post("/register", validateBody(userSignupSchema), registerUser);

authRouter.get("/verify/:verificationToken", verifyUser);

const bedRequestBodyMsg = "missing required field email";
authRouter.post(
  "/verify",
  validateBody(verifyEmailSchema, bedRequestBodyMsg),
  resendVerifyEmail
);

authRouter.post("/login", validateBody(userLoginSchema), loginUser);

authRouter.post("/logout", authenticate, logoutUser);

authRouter.get("/current", authenticate, getCurrentUser);

authRouter.patch(
  "/",
  authenticate,
  validateBody(updateSubscriptionSchema),
  updateSubscription
);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  updateAvatar
);

export default authRouter;
