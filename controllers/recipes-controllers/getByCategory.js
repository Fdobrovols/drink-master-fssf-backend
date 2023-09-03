import { Recipe } from "../../models/recipe/index.js";

const successStatus = 200;

const getByCategory = async (req, res) => {
  const { category } = req.params;

  const { page = 1, limit = 8 } = req.query;

  const skip = (page - 1) * limit;

  const result = await Recipe.find({ category }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).lean();

  res.status(successStatus).json(result);
};

export default getByCategory;
