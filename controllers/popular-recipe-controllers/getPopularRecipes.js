import { Recipe } from "../../models/recipe/index.js";

const getPopularRecipes = async (req, res, next) => {
  const result = await Recipe.aggregate([
    { $sort: { favorite: -1 } },
    { $limit: 10 },
  ]);

  res.json(result);
};

export default getPopularRecipes;
