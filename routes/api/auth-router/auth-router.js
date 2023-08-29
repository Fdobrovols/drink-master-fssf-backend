import express from "express";

import userControllers from "../../../controllers/auth-controllers/index.js";
import { validateBody } from "../../../decorators/index.js";
import joiSchemas from "../../../schemas/users-schemas/index.js";
import middlewares from "../../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(joiSchemas.userSignupSchema),
  userControllers.registerUser
);

authRouter.post(
  "/login",
  validateBody(joiSchemas.userLoginSchema),
  userControllers.loginUser
);

// authRouter.get("/verify/:verificationToken", verifyUser);

// authRouter.post("/verify", validateBody(verifyEmailSchema, bedRequestBodyMsg), resendVerifyEmail);

authRouter.post(
  "/logout",
  middlewares.authenticate,
  userControllers.logoutUser
);

authRouter.get(
  "/current",
  middlewares.authenticate,
  userControllers.getCurrentUser
);

authRouter.patch(
  "/subscribe",
  middlewares.authenticate,
  validateBody(joiSchemas.updateSubscriptionSchema),
  userControllers.updateSubscription
);

authRouter.patch(
  "/update",
  middlewares.authenticate,
  middlewares.upload.single("avatarURL"),
  validateBody(joiSchemas.userUpdateSchema),
  userControllers.updateUser
);

export default authRouter;
