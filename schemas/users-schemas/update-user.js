import Joi from "joi";

const updateUserSchema = Joi.object({
  name: Joi.string().required().empty(false).messages({
    "any.required": "missing required field name",
    "string.empty": "The email must not be empty.",
  }),
});

export default updateUserSchema;
