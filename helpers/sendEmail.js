import sendgrid from "@sendgrid/mail";
import "dotenv/config";

const { EMAIL_FROM, SENDGRID_API_KEY } = process.env;

sendgrid.setApiKey(SENDGRID_API_KEY);

const templates = {
  drinkMaster_subscribe: "d-9f4840b6ad914b5ab086a586d31394a3",
};

export const sendEmail = async (data) => {
  const email = {
    to: data.sender,
    from: EMAIL_FROM,
    templateId: templates[data.templateName],

    dynamic_template_data: {
      name: data.name,
      redirectedEmail: data.redirectedEmail,
    },
  };

  return sendgrid.send(email);
};

export default sendEmail;
