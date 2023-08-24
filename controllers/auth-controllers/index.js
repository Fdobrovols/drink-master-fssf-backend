import { registerUser } from "./registerUser.js";
import { loginUser } from "./loginUser.js";
import { logoutUser } from "./logoutUser.js";
import { getCurrentUser } from "./getCurrentUser.js";
import { updateSubscription } from "./updateSubscription.js";
import { updateAvatar } from "./updateAvatar.js";
import { verifyUser } from "./verifyUser.js";
import { resendVerifyEmail } from "./resendVerifyEmail.js";

export default {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  updateSubscription,
  updateAvatar,
  verifyUser,
  resendVerifyEmail,
};
