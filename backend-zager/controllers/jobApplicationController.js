const nodemailer = require("nodemailer");
const multer = require("multer");

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Email credentials list (two different sender accounts)
const emailAccounts = [
  {
    user: process.env.EMAIL_USER, // "Developer's email address"
    pass: process.env.EMAIL_PASS, // "Developer's App pass  key"
  },
  {
    user: process.env.EMAIL_USER_CARRER, // "career.zager@gmail.com"
    pass: process.env.EMAIL_PASS_CARRER, // "zainyleqazvzekyw"
  },
];

// Function to create a transporter with given credentials
const createTransporter = (emailAccount) => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: emailAccount.user,
      pass: emailAccount.pass,
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
      console.log("Validation failed: Missing required fields");
      return res.status(400).json({
        success: false,
        message: "Name, Role, Email, and Phone are required",
      });
    }

    console.log("Validation passed: All required fields are provided");

    // Select a random email account for sending
    const selectedAccount =
      emailAccounts[Math.floor(Math.random() * emailAccounts.length)];
    console.log("Selected email account:", selectedAccount.user);

    const transporter = createTransporter(selectedAccount);

    // Verify transporter
    await transporter.verify();
    console.log("Transporter verified successfully for:", selectedAccount.user);

    // Prepare email content
    let htmlContent = `
      <h2>New Job Application Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Role:</strong> ${companyName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `;

    const attachments = req.file
      ? [{ filename: req.file.originalname, content: req.file.buffer }]
      : [];

    const mailOptions = {
      from: selectedAccount.user,
      to: process.env.EMAIL_TO,
      subject: "New Job Application Submission",
      html: htmlContent,
      attachments,
    };

    console.log("Sending email from:", selectedAccount.user);
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully from:", selectedAccount.user);

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
  uploadJobResume: upload.single("resume"),
};
