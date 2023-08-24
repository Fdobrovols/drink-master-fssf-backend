import Joi from "joi";
import emailRegexp from "../../constants";

const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

export default verifyEmailSchema;
