import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { User } from "../../models/user/index.js";
import { HttpError } from "../../helpers/index.js";

import "dotenv/config";

const { JWT_SECRET } = process.env;

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = { id: user._id };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: {
      name: user.name,
      email: user.email,
      subscribe: user.subscribe,
      avatarURL: user.avatarURL,
    },
  });
};

export default loginUser;
