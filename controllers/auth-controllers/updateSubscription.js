import { User } from "../../models/user/index.js";
import { HttpError } from "../../helpers/index.js";

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscribe } = req.body;

  const user = await User.findByIdAndUpdate(
    _id,
    {
      subscribe,
    },
    { new: true }
  );

  if (!user) {
    throw HttpError(404);
  }

  res.json({ subscribe: user.subscribe });
};

export default updateSubscription;
