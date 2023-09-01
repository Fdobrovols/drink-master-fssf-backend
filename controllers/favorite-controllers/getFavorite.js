import { Recipe } from "../../models/recipe/index.js";

const getFavorite = async (req, res) => {
  const { page = 1, limit = 2 } = req.query;
  const { _id } = req.user;

  const skip = (page - 1) * limit;

  // const favorite = await Recipe.aggregate([
  //   { $match: { favorite: _id } },
  //   { $count: "totalHits" },
  //   { $skip: Number(skip) },
  //   { $limit: Number(limit) },
  // ]);

  const result = await Recipe.find({ favorite: _id }, "", { skip, limit }).lean();
  const totalHits = await Recipe.countDocuments({ favorite: _id });

  res.json({ data: result, page, limit, totalHits });
};

export default getFavorite;
