import { Recipe } from "../../models/recipe/index.js";

const successStatus = 200;

const getByCategory = async (req, res) => {
  const { category } = req.params;

  const { page = 1, limit = 8, ...query } = req.query;
  const skip = (page - 1) * limit;

    //TODO pagination
  const result = await Recipe.find({ category });

  res.status(successStatus).json(result);
};

export default getByCategory;
