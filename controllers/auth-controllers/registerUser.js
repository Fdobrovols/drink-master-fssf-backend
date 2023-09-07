import bcrypt from "bcryptjs";
import gravatar from "gravatar";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { User } from "../../models/user/index.js";
import { HttpError } from "../../helpers/index.js";

const { JWT_SECRET } = process.env;

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

  const payload = { id: newUser._id };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });

  newUser.token = token;
  await newUser.save();

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    subscribe: newUser.subscribe,
    avatarURL: newUser.avatarURL,
    token,
  });
};

export default registerUser;
