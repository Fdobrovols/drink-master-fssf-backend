import Joi from "joi";
import { emailRegexp } from "../../constants";

const userSignupSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().required(),
});

export default userSignupSchema;
