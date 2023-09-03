import { isValidObjectId } from "mongoose";

import { HttpError } from "../helpers/index.js";

const isValidId = (req, _, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    throw HttpError(404, `${id} is not a valid id`);
  }
  next();
};

export default isValidId;
