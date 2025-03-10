// controllers/jobApplicationController.js
const nodemailer = require("nodemailer");
const multer = require("multer");

// Use multer's memory storage for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Controller function to handle job applications
const createJobApplication = async (req, res) => {
  try {
    const { name, companyName, email, phone } = req.body;
    // In this form, we are using the "companyName" field to represent the candidate's desired role.

    // Validate required fields
    if (!name || !companyName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, Role, Email, and Phone are required",
      });
    }

    // Create a Nodemailer transporter using your Gmail settings
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
      port: Number(process.env.EMAIL_PORT) || 587, // 587 for TLS
      secure: false, // false for 587; true for 465
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your app-specific password (no spaces)
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Prepare the email content
    let htmlContent = `
      <h2>New Job Application Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Role:</strong> ${companyName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `;

    // If a resume file is uploaded, attach it
    const attachments = [];
    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        content: req.file.buffer,
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM, // e.g., "Your Site Name <utkarshzager@gmail.com>"
      to: process.env.EMAIL_TO, // destination email address
      subject: "New Job Application Submission",
      html: htmlContent,
      attachments: attachments,
    };

    // Optionally verify the transporter configuration
    await transporter.verify();

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Your job application has been sent successfully",
    });
  } catch (error) {
    console.error("Error sending job application email:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while processing your application",
    });
  }
};

module.exports = {
  createJobApplication,
  uploadJobResume: upload.single("resume"), // expects the resume file under the field name "resume"
};
