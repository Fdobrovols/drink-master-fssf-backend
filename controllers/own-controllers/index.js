import getOwnRecipes from "./getOwnRecipes.js";
import addOwnRecipe from "./addOwnRecipe.js";
import removeOwnRecipe from "./removeOwnRecipe.js";
import { ctrlrWrapper } from "../../decorators/index.js";

export default {
  getOwnRecipes: ctrlrWrapper(getOwnRecipes),
  addOwnRecipe: ctrlrWrapper(addOwnRecipe),
  removeOwnRecipe: ctrlrWrapper(removeOwnRecipe),
};
