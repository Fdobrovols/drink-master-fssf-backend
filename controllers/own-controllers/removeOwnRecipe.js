import { Recipe } from "../../models/recipe/index.js";
import { HttpError } from "../../helpers/index.js";

const removeOwnRecipe = async (req, res) => {
  const { id } = req.params;

  const deletedRecipe = await Recipe.findByIdAndRemove(id);
  if (!deletedRecipe) {
    throw HttpError(404);
  }
  res.json({ deletedRecipe });
};

export default removeOwnRecipe;
