import { Recipe } from "../../models/recipe/index.js";

const successStatus = 200;

const getById = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);

  const result = await Recipe.findById(id);

  //   res.status(successStatus).json(`it\`s id: ${id}`);
};

export default getById;
