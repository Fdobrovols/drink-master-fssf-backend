import { User } from "../../models/user/index.js";
import { HttpError } from "../../helpers/index.js";

const updateSubscription = async (req, res, next) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const user = await User.findByIdAndUpdate(
    _id,
    {
      subscription: subscription,
    },
    { new: true }
  );

  if (!user) {
    throw HttpError(404);
  }

  res.json(user);
};

export default updateSubscription;
