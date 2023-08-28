import Joi from "joi";

const userUpdateSchema = Joi.object({
  name: Joi.string().required().messages({ "any.required": "missing required field name" }),
});

export default userUpdateSchema;
