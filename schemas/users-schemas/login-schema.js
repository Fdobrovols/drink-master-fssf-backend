import Joi from "joi";

import { emailRegexp } from "../../constants/index.js";

const userLoginSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegexp)
    .required()
    .messages({ "any.required": "missing required field email" }),
  password: Joi.string().required().messages({ "any.required": "missing required field password" }),
});

export default userLoginSchema;
