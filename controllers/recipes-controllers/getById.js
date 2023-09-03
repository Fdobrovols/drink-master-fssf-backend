import { HttpError } from "../../helpers/index.js";
import { Recipe } from "../../models/recipe/index.js";
import { isValidObjectId } from "mongoose";

const successStatus = 200;
const errStatus = 404;

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await Recipe.findById(id).lean();

  if (!result) {
    throw HttpError(errStatus);
  }

  res.status(successStatus).json(result);
};

export default getById;
