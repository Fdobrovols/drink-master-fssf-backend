import jwt from "jsonwebtoken";

import { HttpError } from "../helpers/index.js";
import { User } from "../models/user/index.js";

const { JWT_SECRET } = process.env;

const authenticate = async (req, _, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer" || !token) {
    throw HttpError(401);
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);

    if (!user || !user.token) {
      throw HttpError(401);
    }

    req.user = user;
    next();
  } catch {
    throw HttpError(401);
  }
};

export default authenticate;
