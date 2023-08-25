import Joi from "joi";

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string(),
});

export default updateSubscriptionSchema;
