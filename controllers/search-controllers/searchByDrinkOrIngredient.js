import { ctrlrWrapper } from "../../decorators/index.js";
import { Recipe } from "../../models/recipe/index.js";
import { Ingredient } from "../../models/ingredient/index.js";

const searchByDrinkOrIngredient = async (req, res) => {
  const { search } = req.body;
  console.log(search);
  // const coctails = await Recipe.aggregate([{ $match: { "ingredients.title": search } }]);
  const result = await Recipe.find({
    $or: [{ drink: search }, { "ingredients.title": search }],
  });
  // const ingredients = await Ingredient.find({ title: search });
  console.log(result);
  // console.log(ingredients);

  // const resultResponse = [...coctails, ...ingredients];

  res.json(result);
};

export default ctrlrWrapper(searchByDrinkOrIngredient);
