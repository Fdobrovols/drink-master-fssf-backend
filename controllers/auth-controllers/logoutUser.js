import { ctrlrWrapper } from "../../decorators";
import { User } from "../../models/user";

const successStatus = 204;
const successMessage = "Logout success";

const logoutUser = async (req, res, next) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(successStatus).json({ message: `${successMessage}` });
};

export default { logoutUser: ctrlrWrapper(logoutUser) };
