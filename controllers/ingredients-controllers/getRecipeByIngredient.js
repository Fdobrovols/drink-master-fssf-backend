import { Recipe } from "../../models/recipe/index.js";

const getRecipeByIngredient = async (req, res) => {
  const { ingredient } = req.params;
  const result = await Recipe.find({ "ingredients.title": { $regex: ingredient, $options: "i" } });

  res.json(result);
};

export default getRecipeByIngredient;
