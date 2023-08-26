import { Ingredient } from "../../models/ingredient/index.js";

const getListOfIngredients = async (_, res) => {
  const result = await Ingredient.find();
  console.log(result);

  res.json(result);
};

export default getListOfIngredients;
