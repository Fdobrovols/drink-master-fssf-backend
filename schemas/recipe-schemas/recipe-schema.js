import Joi from "joi";

const recipeSchema = Joi.object({
  drink: Joi.string().required().empty(false).messages({
    "any.required": "missing required field drink",
    "string.base": "The drink must be a string.",
    "string.empty": "The drink must not be empty.",
  }),
  about: Joi.string().required().empty(false).messages({
    "any.required": "missing required field about",
    "string.base": "The about must be a string.",
    "string.empty": "The about must not be empty.",
  }),
  category: Joi.string().required().empty(false).messages({
    "any.required": "missing required field category",
    "string.base": "The category must be a string.",
    "string.empty": "The category must not be empty.",
  }),
  glass: Joi.string().required().empty(false).messages({
    "any.required": "missing required field glass",
    "string.base": "The glass must be a string.",
    "string.empty": "The glass must not be empty.",
  }),
  instructions: Joi.string().required().min(10).empty(false).messages({
    "any.required": "missing required field instructions",
    "string.base": "The instructions must be a string.",
    "string.min": "instructions should have a minimum length of {#limit}",
    "string.empty": "The instructions must not be empty.",
  }),
  ingredients: Joi.array().items(
    Joi.object({
      title: Joi.string().required().empty(false).messages({
        "any.required": "missing required field ingredients' title",
        "array.base": "The ingredients' title must be a ingredients.",
        "array.empty": "The ingredients' title must not be empty.",
      }),
      measure: Joi.string().required().empty(false).messages({
        "any.required": "missing required field ingredients' measure",
        "string.base": "The ingredients' measure must be a string.",
        "string.empty": "The ingredients' measure must not be empty.",
      }),
    })
  ),
});

export default recipeSchema;
