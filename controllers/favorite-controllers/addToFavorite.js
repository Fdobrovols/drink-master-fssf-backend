import { HttpError } from "../../helpers/index.js";
import { Recipe } from "../../models/recipe/index.js";

const addToFavorite = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId, email } = req.user;

  //temp
  userId = "64ec96d22e583b39a2c4f14c";

  //   const result = Recipe.findByIdAndUpdate(
  //     id,
  //     { favorite: [userId, ...favorite] },
  //     { new: true }
  //   );

  if (!result) {
    throw HttpError(errStatus);
  }

  //del
  console.log(result.favorite);
};

export default addToFavorite;
