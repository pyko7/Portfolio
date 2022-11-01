export default async function (req, res) {
  require("dotenv").config();
  const nodemailer = require("nodemailer");
  const validationSchema = require("../../src/validationSchema");

  const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACTEMAIL,
      pass: process.env.CONTACTPASSWORD,
    },
  });

  const { name, email, subject, message } = req.body;
  try {
    await validationSchema.contactForm.validate({
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
    return res.status(200).json({ message: "Message sent to Julien" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
