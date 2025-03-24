const nodemailer = require("nodemailer");
const multer = require("multer");

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Recipient emails (who should receive the job applications)
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

// Controller function for job applications
const createJobApplication = async (req, res) => {
  try {
    console.log("Received a new job application:", req.body);

    const { name, companyName, email, phone } = req.body;

    if (!name || !companyName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, Role, Email, and Phone are required",
      });
    }

    // Prepare email content
    const htmlContent = `
      <h2>New Job Application Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Role:</strong> ${companyName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `;

    // Handle resume attachment
    const attachments = req.file
      ? [{ filename: req.file.originalname, content: req.file.buffer }]
      : [];

    // Create transporter
    const transporter = createTransporter();

    // Send email to both recipient addresses
    const mailOptions = {
      from: senderEmail.user, // Sender: career.zager@gmail.com
      to: recipientEmails, // Send to both recipients
      subject: "New Job Application Submission",
      html: htmlContent,
      attachments,
    };

    console.log("Sending job application email from:", senderEmail.user);
    console.log("Recipients:", recipientEmails.join(", "));

    await transporter.sendMail(mailOptions);
    console.log("Emails sent successfully from:", senderEmail.user);

    return res.status(200).json({
      success: true,
      message:
        "Your job application has been sent successfully to both recipients",
    });
  } catch (error) {
    console.error("Error sending job application email:", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error while processing your application",
    });
  }
};

module.exports = {
  createJobApplication,
  uploadJobResume: upload.single("resume"),
};
