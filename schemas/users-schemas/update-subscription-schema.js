import Joi from "joi";
import { emailRegexp } from "../../constants/index.js";

const updateSubscriptionSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).empty(false).required().messages({
    "any.required": "missing required field email",
    "string.base": "The email must be a string.",
    "string.empty": "The email must not be empty.",
    "string.pattern.base": "The email must be in format test@gmail.com.",
  }),
});

export default updateSubscriptionSchema;
