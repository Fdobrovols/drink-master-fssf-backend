import { ctrlrWrapper } from "../../decorators/index.js";
import getRecipeByIngredient from "./getRecipeByIngredient.js";
import getListOfIngredients from "./getListOfIngredients.js";

export default {
  getRecipeByIngredient: ctrlrWrapper(getRecipeByIngredient),
  getListOfIngredients: ctrlrWrapper(getListOfIngredients),
};
