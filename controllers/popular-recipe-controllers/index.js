import getPopularRecipes from "./getPopularRecipes.js";

import { ctrlrWrapper } from "../../decorators/index.js";

export default { getPopularRecipes: ctrlrWrapper(getPopularRecipes) };
