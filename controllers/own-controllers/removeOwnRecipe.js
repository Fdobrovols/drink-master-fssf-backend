import { Recipe } from "../../models/recipe/index.js";
import { HttpError } from "../../helpers/index.js";

const removeOwnRecipe = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;

  const deletedRecipe = await Recipe.findById(id);
  if (!deletedRecipe) {
    throw HttpError(404);
  }

  if (JSON.stringify(deletedRecipe.owner) === JSON.stringify(_id)) {
    await deletedRecipe.deleteOne();
  } else {
    throw HttpError(403);
  }

  res.json({ deletedRecipe });
};

export default removeOwnRecipe;
