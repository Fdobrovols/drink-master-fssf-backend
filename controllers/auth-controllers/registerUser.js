import bcrypt from "bcryptjs";
import gravatar from "gravatar";

import { User } from "../../models/user/index.js";
import { HttpError } from "../../helpers/index.js";

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    subscribe: newUser.subscribe,
    avatarURL: newUser.avatarURL,
  });
};

export default registerUser
