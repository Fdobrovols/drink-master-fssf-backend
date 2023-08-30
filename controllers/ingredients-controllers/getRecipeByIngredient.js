import { Recipe } from "../../models/recipe/index.js";

const getRecipeByIngredient = async (req, res) => {
  const { ingredient } = req.params;
  const result = await Recipe.find({ "ingredients.title": ingredient });

  res.json(result);
};

export default getRecipeByIngredient;

// Creme de Cacao
