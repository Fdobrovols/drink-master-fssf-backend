import { ctrlrWrapper } from "../../decorators/index.js";
import { Recipe } from "../../models/recipe/index.js";

const searchByDrinkOrIngredient = async (req, res) => {
  const { search } = req.body;

  const result = await Recipe.find({
    $or: [
      { drink: { $regex: search, $options: "i" } },
      { "ingredients.title": { $regex: search, $options: "i" } },
    ],
  });

  res.json(result);
};

export default ctrlrWrapper(searchByDrinkOrIngredient);
