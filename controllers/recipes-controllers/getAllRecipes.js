import { Recipe } from "../../models/recipe/index.js";
import { categoryList } from "../../constants/index.js";

const successStatus = 200;

const getAllRecipes = async (req, res) => {
  const { limitStr = 3 } = req.query;
  const limit = Number(limitStr);
  console.log(typeof limit);

  const result = await Recipe.aggregate([
    { $sort: { category: 1 } },
    { $limit: limit },
  ]);

  // const result = categoryList.map(async (category) => {
  //   const response = await Recipe.find({ category }, "", { limit });
  // return { category, coctails: response };
  //   console.log(response);
  // });

  // console.log(result);

  // const result = await Recipe.find().lean();

  res.status(successStatus).json(result);
};

export default getAllRecipes;
