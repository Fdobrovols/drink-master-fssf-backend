import Joi from "joi";
import { emailRegexp } from "../../constants/index.js";

const updateSubscriptionSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "missing required field email" }),
});

export default updateSubscriptionSchema;
