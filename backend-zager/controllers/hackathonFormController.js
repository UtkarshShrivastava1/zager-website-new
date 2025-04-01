const nodemailer = require("nodemailer");
const multer = require("multer");

// Multer setup for file uploads (Stores in memory as a Buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Email recipients
const recipientEmails = [
  process.env.EMAIL_RECEIVER_1 || "utkarshzager@gmail.com",
  process.env.EMAIL_RECEIVER_2 || "career.zager@gmail.com",
];

// Email sender credentials
const senderEmail = {
  user: process.env.EMAIL_USER_CAREER || "career.zager@gmail.com",
  pass: process.env.EMAIL_PASS_CAREER || "zainyleqazvzekyw",
};

// Create email transporter function
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false, // Use STARTTLS
    auth: {
      user: senderEmail.user,
      pass: senderEmail.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

// Hackathon Registration Controller
const registerForHackathon = async (req, res) => {
  try {
    console.log("🔹 Received Hackathon Registration:", req.body);

    const {
      teamName,
      email,
      phone1,
      phone2,
      Occupation,
      members,
      hackathonType,
      registrationID,
    } = req.body;

    // Validate required fields
    if (
      !teamName ||
      !email ||
      !phone1 ||
      !phone2 ||
      !Occupation ||
      !members ||
      !hackathonType ||
      !registrationID
    ) {
      return res.status(400).json({
        success: false,
        message:
          "All fields (Team Name, Email, Two Contact Numbers, Occupation, Members, Hackathon Type,registrationID) are required.",
      });
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format." });
    }

    // Validate phone numbers
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone1) || !phoneRegex.test(phone2)) {
      return res.status(400).json({
        success: false,
        message: "Invalid phone number format (10 digits required).",
      });
    }

    // Ensure a file is uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Payment receipt image is required.",
      });
    }

    // Prepare email content
    const htmlContent = `
      <h2>New Hackathon Registration</h2>
      <p><strong>Team Name:</strong> ${teamName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Primary Contact:</strong> ${phone1}</p>
      <p><strong>Secondary Contact:</strong> ${phone2}</p>
      <p><strong>Occupation:</strong> ${Occupation}</p>
      <p><strong>Team Members:</strong> ${members}</p>
      <p><strong>Hackathon Type:</strong> ${hackathonType}</p>
      <p><strong>Registration ID:</strong> ${registrationID}</p>
    `;

    // Attachment (Payment Receipt)
    const attachments = [
      { filename: req.file.originalname, content: req.file.buffer },
    ];

    // Create transporter
    const transporter = createTransporter();

    // Mail options
    const mailOptions = {
      from: `"Hackathon Team" <${senderEmail.user}>`,
      to: recipientEmails.join(", "),
      subject: "🔹 New Hackathon Registration Submission",
      html: htmlContent,
      attachments,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("✅ Hackathon Registration Email Sent Successfully");

    return res.status(200).json({
      success: true,
      message: "Your hackathon registration has been submitted successfully!",
    });
  } catch (error) {
    console.error(
      "❌ Error Sending Hackathon Registration Email:",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Server error while processing your registration.",
    });
  }
};

// Export controller & multer middleware
module.exports = {
  registerForHackathon,
  uploadHackathonFile: upload.single("paymentReceipt"),
};
