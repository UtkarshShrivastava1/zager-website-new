// controllers/contactController.js
const nodemailer = require("nodemailer");

const createContact = async (req, res) => {
  try {
    console.log("Received a new contact request:", req.body);

    const { name, companyName, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !companyName || !email || !phone || !message) {
      console.log("Validation failed: Missing required fields");
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    console.log("Validation passed: All fields are provided");

    // Create a Nodemailer transporter using environment settings
    console.log("Configuring Nodemailer transporter...");
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
      port: Number(process.env.EMAIL_PORT) || 587, // 587 for TLS
      secure: false, // false for 587, true for 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    console.log("Transporter successfully created. Verifying transporter...");

    // Verify transporter before sending email
    await transporter.verify();
    console.log("Transporter verified successfully");

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Contact Us Submission",
      html: `
        <h2>Contact Us Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };

    console.log("Sending email to:", process.env.EMAIL_TO);

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to:", process.env.EMAIL_TO);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully",
    });
  } catch (error) {
    console.error("Error occurred while sending email:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error while sending your message",
    });
  }
};

module.exports = { createContact };
