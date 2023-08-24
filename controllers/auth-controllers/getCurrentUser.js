import { ctrlrWrapper } from "../../decorators";

const successStatus = 200;

const getCurrentUser = (req, res, next) => {
  const { email, subscription } = req.user;

  res.status(successStatus).json({ email, subscription });
};

export default { getCurrentUser: ctrlrWrapper(getCurrentUser) };
