import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { ctrlrWrapper } from "../../decorators";
import { User } from "../../models/user";
import { HttpError } from "../../helpers";

import "dotenv/config";

const { JWT_SECRET } = process.env;

const loginSuccessStatus = 200;
const loginErrStatus = 401;
const loginErrMessage = "Email or password is wrong";
const verifyErrMessage = "The email is not verified";

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(loginErrStatus, loginErrMessage);
  }

  if (!user.verify) {
    throw HttpError(loginErrStatus, verifyErrMessage);
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw HttpError(loginErrStatus, loginErrMessage);
  }

  const payload = { id: user._id };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.status(loginSuccessStatus).json({
    token: `${token}`,
    user: { email: `${user.email}`, subscription: `${user.subscription}` },
  });
};

export default { loginUser: ctrlrWrapper(loginUser) };
