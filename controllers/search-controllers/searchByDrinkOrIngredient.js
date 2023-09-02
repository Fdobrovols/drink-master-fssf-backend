import { ctrlrWrapper } from "../../decorators/index.js";
import { Recipe } from "../../models/recipe/index.js";

const searchByDrinkOrIngredient = async (req, res) => {
  const { searchWord, ingredient, category, page = 1, limit = 9 } = req.query;

  const skip = (page - 1) * limit;

  let query = [];

  if (searchWord) {
    query.push({
      $or: [
        { drink: { $regex: searchWord, $options: "i" } },
        { "ingredients.title": { $regex: searchWord, $options: "i" } },
      ],
    });
  }

  if (ingredient) {
    query.push({ "ingredients.title": { $regex: ingredient, $options: "i" } });
  }

  if (category) {
    query.push({ category: { $regex: category, $options: "i" } });
  }

  const totalHits = await Recipe.countDocuments({ $and: query });

  const result = await Recipe.find({ $and: query }, "", { skip, limit }).lean();

  res.json({ page, limit, totalHits, result });
};

export default ctrlrWrapper(searchByDrinkOrIngredient);
