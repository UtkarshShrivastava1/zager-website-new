const nodemailer = require("nodemailer");

// Recipient emails (who should receive the contact messages)
const recipientEmails = [
  process.env.EMAIL_RECEIVER_1 || "utkarshzager@gmail.com",
  process.env.EMAIL_RECEIVER_2 || "career.zager@gmail.com",
];

// Email sender credentials (career.zager@gmail.com)
const senderEmail = {
  user: process.env.EMAIL_USER_CAREER || "career.zager@gmail.com", // Sender email
  pass: process.env.EMAIL_PASS_CAREER || "zainyleqazvzekyw", // Sender app password
};

// Function to create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: senderEmail.user,
      pass: senderEmail.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

// Controller function for contact form submissions
const createContact = async (req, res) => {
  try {
    console.log("Received a new contact request:", req.body);

    const { name, companyName, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !companyName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    console.log("Validation passed: All fields are provided");

    // Email content
    const htmlContent = `
      <h2>New Contact Us Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `;

    // Create transporter
    const transporter = createTransporter();

    // Send email to both recipient addresses
    const mailOptions = {
      from: senderEmail.user, // Sender: career.zager@gmail.com
      to: recipientEmails, // Send to both recipients
      subject: "New Contact Us Submission",
      html: htmlContent,
    };

    console.log("Sending contact form email from:", senderEmail.user);
    console.log("Recipients:", recipientEmails.join(", "));

    await transporter.sendMail(mailOptions);
    console.log("Emails sent successfully from:", senderEmail.user);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully to both recipients",
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
