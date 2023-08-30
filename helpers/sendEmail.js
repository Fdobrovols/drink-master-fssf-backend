import sendgrid from "@sendgrid/mail";
import "dotenv/config";

const { EMAIL_FROM, SENDGRID_API_KEY } = process.env;

sendgrid.setApiKey(SENDGRID_API_KEY);

export const sendEmail = async (data) => {
  const email = { ...data, from: EMAIL_FROM };
  return sendgrid.send(email);
};

export default sendEmail;
