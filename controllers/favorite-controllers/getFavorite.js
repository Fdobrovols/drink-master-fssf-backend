import { Recipe } from "../../models/recipe/index.js";

const getFavorite = async (req, res) => {
  const { page = 1, limit = 9 } = req.query;
  const { _id } = req.user;

  const skip = (page - 1) * limit;
  const numberPage = Number(page);
  const numberLimit = Number(limit);

  const result = await Recipe.find({ favorite: _id }, "", {
    skip,
    limit,
  }).lean();

  const totalHits = await Recipe.countDocuments({ favorite: _id });

  res.json({ page: numberPage, limit: numberLimit, totalHits, result });
};

export default getFavorite;
