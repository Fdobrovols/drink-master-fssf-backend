import registerUser from "./registerUser.js";
import loginUser from "./loginUser.js";
import logoutUser from "./logoutUser.js";
import getCurrentUser from "./getCurrentUser.js";
import updateSubscription from "./updateSubscription.js";
import updateAvatar from "./updateAvatar.js";
import { ctrlrWrapper } from "../../decorators/index.js";

export default {
  registerUser: ctrlrWrapper(registerUser),
  loginUser: ctrlrWrapper(loginUser),
  logoutUser: ctrlrWrapper(logoutUser),
  getCurrentUser: ctrlrWrapper(getCurrentUser),
  updateSubscription: ctrlrWrapper(updateSubscription),
  updateAvatar: ctrlrWrapper(updateAvatar),
};
