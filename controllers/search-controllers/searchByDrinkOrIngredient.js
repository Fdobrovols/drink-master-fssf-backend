import { ctrlrWrapper } from "../../decorators/index.js";
import { Recipe } from "../../models/recipe/index.js";
import { Ingredient } from "../../models/ingredient/index.js";

const searchByDrinkOrIngredient = async (req, res) => {
  const { search } = req.body;
  console.log(search);
  const coctails = await Recipe.find({ drink: search });
  const ingredients = await Ingredient.find({ title: search });
  console.log(coctails);
  console.log(ingredients);

  const resultResponse = [...coctails, ...ingredients];

  res.json(resultResponse);
};

export default ctrlrWrapper(searchByDrinkOrIngredient);
