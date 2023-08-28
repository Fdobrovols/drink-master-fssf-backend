import { Recipe } from "../../models/recipe/index.js";

const addOwnRecipe = async (req, res) => {
  const { _id: owner } = req.user;
  const newRecipe = await Recipe.create({ ...req.body, owner });
  res.status(201).json(newRecipe);
};

export default addOwnRecipe;
