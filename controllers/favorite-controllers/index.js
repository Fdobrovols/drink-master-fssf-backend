import addToFavorite from "./addToFavorite.js";
import getFavorite from "./getFavorite.js";
import removeFromFavorite from "./removeFromFavorite.js";

import { ctrlrWrapper } from "../../decorators/index.js";

export default {
  addToFavorite: ctrlrWrapper(addToFavorite),
  getFavorite: ctrlrWrapper(getFavorite),
  removeFromFavorite: ctrlrWrapper(removeFromFavorite),
};
