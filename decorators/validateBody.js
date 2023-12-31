import { HttpError } from "../helpers/index.js";

const validateBody = (schema, message) => {
  const func = (req, _, next) => {
    if (req.body.ingredients && typeof req.body.ingredients === "string") {
      const parsedIngredients = JSON.parse(req.body.ingredients);
      req.body.ingredients = [...parsedIngredients];
    }

    const { error } = schema.validate(req.body);

    if (error) {
      throw HttpError(400, !message ? error.message : message);
    }

    next();
  };

  return func;
};

export default validateBody;
