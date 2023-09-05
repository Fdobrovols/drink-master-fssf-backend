import { User } from "../../models/user/index.js";
import { HttpError } from "../../helpers/index.js";
import { sendEmail } from "../../helpers/index.js";

const updateSubscription = async (req, res) => {
  const { _id, name, email: userEmail, subscribe } = req.user;
  console.log(subscribe);
  const { email } = req.body;

  if (email !== userEmail) {
    throw HttpError(
      400,
      "You can subscribe only to the email address you specified during registration"
    );
  }

  if (subscribe) {
    throw HttpError(400, "You are already subscribed to our newsletter");
  }

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
    sender: email,
    templateName: "drinkMaster_subscribe",
    name,
    redirectedEmail: "https://ansachuk.github.io/FSSF-DrinkMaster/",
  };

  await sendEmail(subscriptionEmailMessage);

  res.json({ subscribe: user.subscribe });
};

export default updateSubscription;
