import { User } from "../../models/user/index.js";
import { HttpError } from "../../helpers/index.js";

const verifyUser = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });

  if (!user) {
    throw HttpError(404);
  }

  user.verify = true;
  user.verificationToken = null;
  await user.save();

  res.json({ message: "Verification successful" });
};

export default verifyUser;
