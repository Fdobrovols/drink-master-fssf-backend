import Joi from "joi";
import { subscriptionValues } from "../../constants";

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionValues)
    .required(),
});

export default updateSubscriptionSchema;
