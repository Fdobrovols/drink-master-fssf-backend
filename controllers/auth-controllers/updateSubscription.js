import { ctrlrWrapper } from "../../decorators";
import { HttpError } from "../../helpers";
import { User } from "../../models/user";

const successStatus = 200;
const errStatus = 404;

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
    throw HttpError(errStatus);
  }

  res.status(successStatus).json(user);
};

export default { updateSubscription: ctrlrWrapper(updateSubscription) };
