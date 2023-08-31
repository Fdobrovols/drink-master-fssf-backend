import { Recipe } from "../../models/recipe/index.js";
import { HttpError } from "../../helpers/index.js";

const removeFromFavorite = async (req, res, next) => {
  const { id } = req.params;
  const { _id } = req.user;

  const result = await Recipe.findById(id);

  if (!result) {
    throw HttpError(errStatus);
  }

  if (result.favorite) {
    if (result.favorite.includes(_id)) {
      const index = result.favorite.indexOf(_id);
      result.favorite.splice(index, 1);
    }
  }

  await result.save();

  res.json({ result });
};

export default removeFromFavorite;
