import Joi from "joi";

const updateSubscriptionSchema = Joi.object({
  email: Joi.string().required().messages({ "any.required": "missing required field email" }),
});

export default updateSubscriptionSchema;
