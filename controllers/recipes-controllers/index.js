import getCategoryList from "./getCategoryList.js";
import getAllRecipes from "./getAllRecipes.js";
import getByCategory from "./getByCategory.js";
import getById from "./getById.js";

import { ctrlrWrapper } from "../../decorators/index.js";

export default {
  getCategoryList: ctrlrWrapper(getCategoryList),
  getAllRecipes: ctrlrWrapper(getAllRecipes),
  getByCategory: ctrlrWrapper(getByCategory),
  getById: ctrlrWrapper(getById),
};
