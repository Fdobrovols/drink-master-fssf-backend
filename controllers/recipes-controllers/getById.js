import { Recipe } from "../../models/recipe/index.js";
import { isValidObjectId } from "mongoose";

const successStatus = 200;

const getById = async (req, res, next) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return next();
  }

  const result = await Recipe.findById(id);

  res.status(successStatus).json(result);
};

export default getById;
