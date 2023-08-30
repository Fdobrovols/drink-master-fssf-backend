import { Recipe } from "../../models/recipe/index.js";

const getFavorite = async (req, res, next) => {
  // const { limit = 2 } = req.query;

  const { _id } = req.user;

  // const result = await Recipe.find({ favorite: _id }, "", { limit }).lean();
  const result = await Recipe.find({ favorite: _id }).lean();

  res.json(result);
};

export default getFavorite;
