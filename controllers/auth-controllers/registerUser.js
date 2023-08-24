import bcrypt from "bcryptjs";
import gravatar from "gravatar";
import { nanoid } from "nanoid";

import { User } from "../../models/user";
import { ctrlrWrapper } from "../../decorators";
import { HttpError } from "../../helpers";
import { sendVerificationEmail } from "../../services/email";

const registerSuccessStatus = 201;
const registerErrStatus = 409;
const conflictErrMessage = "Email in use";

const saltAmount = 10;

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(registerErrStatus, conflictErrMessage);
  }

  const hashPassword = await bcrypt.hash(password, saltAmount);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  sendVerificationEmail(email, verificationToken);

  res.status(registerSuccessStatus).json({
    email: newUser.email,
    subsription: newUser.subscription,
  });
};

export default { registerUser: ctrlrWrapper(registerUser) };
