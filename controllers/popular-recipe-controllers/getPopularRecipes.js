import { Recipe } from "../../models/recipe/index.js";

const defaultDocNumber = 4;

const getPopularRecipes = async (req, res, next) => {
  const isNumberSet = Boolean(req.query.number_of_popular);

  const docNumber = isNumberSet
    ? Number(req.query.number_of_popular)
    : defaultDocNumber;

  const result = await Recipe.aggregate([
    { $sort: { favorite: -1 } },
    { $limit: docNumber },
  ]);

  res.json(result);
};

export default getPopularRecipes;
