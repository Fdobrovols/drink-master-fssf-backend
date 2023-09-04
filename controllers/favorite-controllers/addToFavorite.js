import { Recipe } from "../../models/recipe/index.js";
import { HttpError } from "../../helpers/index.js";

const errStatus = 404;

const addToFavorite = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;

  let favoriteRecipe = await Recipe.findById(id);

  if (!favoriteRecipe) {
    throw HttpError(errStatus);
  }

  if (favoriteRecipe.favorite) {
    if (!favoriteRecipe.favorite.includes(_id)) {
      favoriteRecipe.favorite.push(_id);
    }
  } else {
    favoriteRecipe = { ...favoriteRecipe, favorite: [_id] };
  }

  await favoriteRecipe.save();

  res.json(favoriteRecipe);
};

export default addToFavorite;
