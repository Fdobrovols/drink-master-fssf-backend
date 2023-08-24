import { ctrlrWrapper } from "../../decorators";
import { User } from "../../models/user";
import { HttpError } from "../../helpers";
import { sendVerificationEmail } from "../../services/email";

const userNotFoundStatus = 404;
const isVerifiedErrorStatus = 400;
const successResendStatus = 200;

const isVerifiedErrorMsg = "Verification has already been passed";
const successResendMsg = "Verification email resend";

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;

  console.log(email);

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(userNotFoundStatus);
  }

  if (user.verify) {
    throw HttpError(isVerifiedErrorStatus, isVerifiedErrorMsg);
  }

  sendVerificationEmail(email, user.verificationToken);

  res.status(successResendStatus).json({ message: successResendMsg });
};

export default { resendVerifyEmail: ctrlrWrapper(resendVerifyEmail) };
