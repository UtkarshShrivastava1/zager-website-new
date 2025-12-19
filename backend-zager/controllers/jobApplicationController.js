const multer = require("multer");
const { Resend } = require("resend");

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Recipients (to receive job applications)
const recipientEmails = [
  process.env.EMAIL_RECEIVER_1 || "utkarshzager@gmail.com",
  process.env.EMAIL_RECEIVER_2 || "career.zager@gmail.com",
];

// Sender info
const senderEmail = process.env.EMAIL_USER_CAREER || "career.zager@gmail.com";
const resendApiKey = process.env.RESEND_API_KEY; // ✅ Must be added in Render Dashboard

// Initialize Resend client
const resend = new Resend(resendApiKey);

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

    // ✅ Prepare email body
    const htmlContent = `
      <div style="font-family: system-ui, sans-serif; line-height: 1.5;">
        <h2>New Job Application Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Role:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      </div>
    `;

    // Handle resume attachment if uploaded
    let attachments = [];
    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        content: req.file.buffer.toString("base64"),
        path: undefined,
        contentType: req.file.mimetype,
      });
    }

    console.log("Sending job application email via Resend...");
    console.log("Recipients:", recipientEmails.join(", "));

    // ✅ Send email using Resend API
    await resend.emails.send({
      from: `Zager Careers <${senderEmail}>`,
      to: recipientEmails,
      subject: "New Job Application Submission",
      html: htmlContent,
      attachments: attachments.length ? attachments : undefined,
    });

    console.log("Emails sent successfully via Resend from:", senderEmail);

    return res.status(200).json({
      success: true,
      message:
        "Your job application has been sent successfully to both recipients",
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
  uploadJobResume: upload.single("resume"),
};
