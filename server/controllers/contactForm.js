const formSchema = require("../models/contactForm");
require("dotenv").config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.CONTACTEMAIL,
    pass: process.env.CONTACTPASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

const submitContactForm = async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  try {
    await formSchema.contactForm.validate({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });

    await transporter.sendMail({
      from: `"${name}" ${email}`, // sender name + address
      to: process.env.CONTACTEMAIL,
      subject: `Portfolio: ${subject}`,
      text: `${message}`,
      html: `
      <p>A message from <strong>${name}</strong></p>
      <p>"${message}"</p>
      <br/>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      `,
    });
    res.status(200).json({ message: "Message sent to Julien" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  submitContactForm,
};
