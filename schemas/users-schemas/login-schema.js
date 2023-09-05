import Joi from "joi";
import { emailRegexp, passwordRegexp } from "../../constants/index.js";

const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().empty(false).messages({
    "any.required": "missing required field email",
    "string.base": "The email must be a string.",
    "string.empty": "The email must not be empty.",
    "string.pattern.base": "The email must be in format test@gmail.com.",
  }),
  password: Joi.string().min(6).max(16).pattern(passwordRegexp).empty(false).required().messages({
    "any.required": "missing required field password",
    "string.base": "The email must be a string.",
    "string.empty": "The email must not be empty.",
    "string.min": "password should have a minimum length of {#limit}",
    "string.max": "{{#label}} length must be less than or equal to {{#limit}} characters long",
    "string.pattern.base":
      "{:[.]} does not meet the requirements. Password must contain at least 1 capital letter, 1 small letter and 1 number",
  }),
});

export default userLoginSchema;
