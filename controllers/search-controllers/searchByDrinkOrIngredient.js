import { ctrlrWrapper } from "../../decorators/index.js";
import { Recipe } from "../../models/recipe/index.js";
import { Ingredient } from "../../models/ingredient/index.js";

const searchByDrinkOrIngredient = async (req, res) => {
  const { search } = req.body;

  const result = await Recipe.find({
    $or: [{ drink: search }, { "ingredients.title": search }],
  });

  res.json(result);
};

export default ctrlrWrapper(searchByDrinkOrIngredient);
