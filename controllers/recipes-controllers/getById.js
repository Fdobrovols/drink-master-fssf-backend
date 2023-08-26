import { Recipe } from "../../models/recipe/index.js";

const successStatus = 200;

const getById = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;

  const result = await Recipe.findById(id);

  res.status(successStatus).json(result);
};

export default getById;
