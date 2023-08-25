import Joi from "joi";
import { emailRegexp } from "../../constants/index.js";

const userSignupSchema = Joi.object({
  name: Joi.string().required().messages({ "any.required": "missing required field name" }),
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "missing required field email" }),
  password: Joi.string().min(6).required().messages({
    "string.min": `password should have a minimum length of {#limit}`,
    "any.required": "missing required field password",
  }),
});

export default userSignupSchema;
