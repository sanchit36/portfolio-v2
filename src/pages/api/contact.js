const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    const data = req.body;
    const name = data.name;
    const email = data.email;
    const message = data.message;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: username,
        pass: password,
      },
    });

    try {
      await transporter.sendMail({
        from: username,
        to: myEmail,
        replyTo: email,
        subject: `Website activity from ${email}`,
        html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Message: ${message} </p>
        `,
      });

      return res.status(200).json({ message: "Success: email was sent" });
    } catch (error) {
      res.status(500).json({ message: "COULD NOT SEND MESSAGE" });
    }
  }
}
