import { Recipe } from "../../models/recipe/index.js";

const successStatus = 200;

const getAllRecipes = async (_, res) => {
  const result = await Recipe.find();

  res.status(successStatus).json(result);
};

export default getAllRecipes;
