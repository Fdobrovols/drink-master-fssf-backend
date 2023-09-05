import { Recipe } from "../../models/recipe/index.js";
import { HttpError } from "../../helpers/index.js";

const errStatus = 404;

const addToFavorite = async (req, res) => {
  const { id: recipeId } = req.params;
  const { _id: userId } = req.user;

  let favoriteRecipe = await Recipe.findById(recipeId);

  if (!favoriteRecipe) {
    throw HttpError(errStatus);
  }

  if (favoriteRecipe.favorite) {
    if (!favoriteRecipe.favorite.includes(userId)) {
      favoriteRecipe.favorite.push(userId);
    }
  } else {
    favoriteRecipe = { ...favoriteRecipe, favorite: [userId] };
  }

  await favoriteRecipe.save();

  res.json(favoriteRecipe);
};

export default addToFavorite;
