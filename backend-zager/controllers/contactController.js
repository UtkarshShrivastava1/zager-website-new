// controllers/contactController.js
const nodemailer = require("nodemailer");

const createContact = async (req, res) => {
  try {
    const { name, companyName, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !companyName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create a Nodemailer transporter using Gmail settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
      port: Number(process.env.EMAIL_PORT) || 587, // 587 for TLS
      secure: false, // false for 587 port; set to true for port 465
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your app-specific password (no spaces)
      },
      tls: {
        rejectUnauthorized: false, // optional, useful if you encounter certificate issues
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM, // e.g., "Your Site Name <utkarshzager@gmail.com>"
      to: process.env.EMAIL_TO, // destination email address
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

    // Optionally verify the transporter configuration before sending
    await transporter.verify();

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while sending your message",
    });
  }
};

module.exports = { createContact };
