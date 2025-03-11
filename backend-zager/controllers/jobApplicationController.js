// controllers/jobApplicationController.js
const nodemailer = require("nodemailer");
const multer = require("multer");

// Use multer's memory storage for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Controller function to handle job applications
const createJobApplication = async (req, res) => {
  try {
    console.log("Received a new job application:", req.body);

    const { name, companyName, email, phone } = req.body;
    // In this form, "companyName" represents the candidate's desired role.

    // Validate required fields
    if (!name || !companyName || !email || !phone) {
      console.log("Validation failed: Missing required fields");
      return res.status(400).json({
        success: false,
        message: "Name, Role, Email, and Phone are required",
      });
    }

    console.log("Validation passed: All required fields are provided");

    // Create a Nodemailer transporter using environment settings
    console.log("Configuring Nodemailer transporter...");
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., smtp.gmail.com
      port: Number(process.env.EMAIL_PORT) || 587, // 587 for TLS
      secure: false, // false for 587; true for 465
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
      console.log(
        `Resume received: ${req.file.originalname}, size: ${req.file.size} bytes`
      );
      attachments.push({
        filename: req.file.originalname,
        content: req.file.buffer,
      });
    } else {
      console.log("No resume file uploaded");
    }

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "New Job Application Submission",
      html: htmlContent,
      attachments: attachments,
    };

    console.log("Sending job application email to:", process.env.EMAIL_TO);

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(
      "Job application email sent successfully to:",
      process.env.EMAIL_TO
    );

    return res.status(200).json({
      success: true,
      message: "Your job application has been sent successfully",
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
  uploadJobResume: upload.single("resume"), // expects the resume file under the field name "resume"
};
