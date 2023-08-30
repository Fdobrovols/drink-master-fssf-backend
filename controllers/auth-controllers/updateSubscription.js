import { User } from "../../models/user/index.js";
import { HttpError } from "../../helpers/index.js";
import { sendEmail } from "../../helpers/index.js";

const updateSubscription = async (req, res) => {
  const { _id, name } = req.user;
  const { email } = req.body;

  const user = await User.findByIdAndUpdate(
    _id,
    {
      subscribe: true,
    },
    { new: true }
  );

  if (!user) {
    throw HttpError(404);
  }

  const subscriptionEmailMessage = {
    to: email,
    subject: "Hello, our new subscriber",
    html: `Dear ${name},

We are delighted to express our sincere gratitude for your subscription to Drink Master. Your decision to join us brings us immense joy.

Your subscription ensures you'll receive our latest updates and insights firsthand. Your support inspires us to continue delivering valuable content.

If you have any questions or suggestions, please don't hesitate to reach out. We're excited to have you on board and look forward to a fruitful relationship.

Thank you for choosing Drink Master.

    <a target='_blank' href='https://ansachuk.github.io/FSSF-DrinkMaster/'>Click to back to home page</a>`,
  };

  await sendEmail(subscriptionEmailMessage);

  res.json({ subscribe: user.subscribe });
};

export default updateSubscription;
