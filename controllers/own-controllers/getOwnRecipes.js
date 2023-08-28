import { Recipe } from "../../models/recipe/index.js";

const getOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Recipe.find({ owner });
  res.json(result);
};

export default getOwnRecipes;
