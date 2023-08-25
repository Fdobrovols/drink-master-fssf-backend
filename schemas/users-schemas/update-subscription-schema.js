import Joi from "joi";

const updateSubscriptionSchema = Joi.object({
  subscribe: Joi.boolean()
    .required()
    .messages({ "any.required": "missing required field subscribe" }),
});

export default updateSubscriptionSchema;
