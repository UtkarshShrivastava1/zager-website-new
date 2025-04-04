const nodemailer = require("nodemailer");
const multer = require("multer");
const PDFDocument = require("pdfkit"); // For generating PDFs
const { Readable } = require("stream"); // To convert PDF to buffer
require("dotenv").config(); // Load environment variables
const QRCode = require("qrcode"); // QR Code Generator
const axios = require("axios"); // For fetching images from URL

// Multer setup for file uploads (Stores in memory as a Buffer)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Email recipients (Admins)
const recipientEmails = [
  process.env.EMAIL_RECEIVER_1 || "utkarshzager@gmail.com",
  process.env.EMAIL_RECEIVER_2 || "zhack.zager@gmail.com",
];

// Email sender credentials
const senderEmail = {
  user: process.env.EMAIL_USER_ZHACK || "zhack.zager@gmail.com",
  pass: process.env.EMAIL_PASS_ZHACK,
};

// Create email transporter function
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
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

// Function to generate a registration pass as a PDF
const generateRegistrationPass = async (
  teamName,
  registrationID,
  email,
  phone1,
  hackathonType,
  members,
  member1
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = new PDFDocument({
        margin: 30,
        size: "A4", // 🔹 Force 1-page size
      });

      let buffers = [];
      doc.on("data", buffers.push.bind(buffers));
      doc.on("end", () => resolve(Buffer.concat(buffers)));

      const headerHeight = 60;
      doc.rect(0, 0, 600, headerHeight).fill("#051224");

      const logoUrl =
        "https://www.zager.in/assets/Final_Logo_White-BsljKSah.png";
      const response = await axios.get(logoUrl, {
        responseType: "arraybuffer",
      });
      const logoBuffer = Buffer.from(response.data, "binary");
      doc.image(logoBuffer, 40, 15, { width: 70 });

      doc
        .fillColor("#ffffff")
        .font("Helvetica-Bold")
        .fontSize(20)
        .text("\n  Z-HACK Registration Pass", 0, 15, { align: "center" });

      doc.fillColor("#000000");
      doc.moveDown(1.5);

      const now = new Date();
      const formattedDate = now.toLocaleString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const memberList =
        typeof members === "string"
          ? members
              .split(",")
              .map((m) => m.trim())
              .filter((m) => m)
          : Array.isArray(members)
          ? members
          : [];

      const startX = 40;
      let startY = doc.y;
      const colWidths = [160, 300];

      doc.font("Helvetica-Bold").fontSize(11);
      doc
        .text("Field", startX, startY)
        .text("Details", startX + colWidths[0], startY);
      doc
        .moveTo(startX, startY + 15)
        .lineTo(startX + colWidths[0] + colWidths[1], startY + 15)
        .stroke();
      startY += 20;

      const tableData = [
        { field: "Team Name", value: teamName },
        { field: "Registration ID", value: registrationID },
        { field: "Email", value: email },
        { field: "Contact Number", value: phone1 },
        { field: "Hackathon Type", value: hackathonType },
        { field: "Registration Date & Time", value: formattedDate },
      ];

      doc.font("Helvetica").fontSize(10);
      tableData.forEach((row, index) => {
        if (index % 2 === 0) {
          doc
            .rect(startX, startY - 5, colWidths[0] + colWidths[1], 20)
            .fill("#E3E3E3");
          doc.fillColor("#000000");
        }
        doc.text(row.field, startX, startY);
        doc.text(row.value, startX + colWidths[0], startY);
        startY += 18;
        doc
          .moveTo(startX, startY - 5)
          .lineTo(startX + colWidths[0] + colWidths[1], startY - 5)
          .stroke();
      });

      doc.moveDown(0.5);
      doc
        .font("Helvetica-Bold")
        .fontSize(11)
        .text("Team Members:", startX, doc.y);
      doc.font("Helvetica").fontSize(10);
      startY = doc.y + 8;

      if (memberList.length > 0) {
        memberList.forEach((member, index) => {
          doc.text(`${index + 1}. ${member}`, startX + 20, startY);
          startY += 14;
        });
      } else {
        doc.text("N/A", startX + 20, startY);
        startY += 14;
      }

      doc.moveDown(0.8);
      doc
        .font("Helvetica-Bold")
        .fontSize(11)
        .fillColor("#003366")
        .text("Important Participant Guidelines:", startX, doc.y, {
          underline: true,
        });

      doc.moveDown(0.3);
      doc.font("Helvetica").fontSize(9.5).fillColor("#000000");

      const instructions = [
        "Mandatory Documents: Participants must bring a printed copy of their registration ID slip and a valid government-issued ID card on April 12 & April 25. Students must also carry their student ID card (if applicable).",
        "Reporting Time:\nApril 12: Reporting time is 11:00 AM, and participants must arrive at least 20 minutes prior.\nApril 25: The reporting time will be communicated on April 12.",
        "Project Development: Teams must develop their project strictly within the given timeframe.",
        "Project Submission: All teams must submit their final project, source code, and demo video before the deadline.",
        "Documentation: Each submission must include a project description, setup instructions, and feature details.",
        "Submission Process: All materials must be submitted via the designated submission portal, as outlined in the project description document (to be shared on April 12).",
        "Project Functionality: The submitted app/web app must be fully functional or at least a working prototype.",
        "Mandatory Attendance: All team members must be present on April 12 & April 25 for the orientation, project briefing, and final presentation.",
        "Project Allocation: Projects will be assigned by the Zager team, and requests for changes will not be entertained.",
        "Presentation Requirement: Teams must prepare a presentation and demonstrate their working prototype during the final presentation on April 25.",
        "No Refund Policy: Registration fees are non-refundable under any circumstances.",
      ];

      instructions.forEach((point) => {
        doc.text(point, {
          width: 510,
          lineGap: 2,
          paragraphGap: 3,
        });
      });

      doc.moveDown(0.8);
      doc
        .font("Helvetica-Bold")
        .fontSize(11)
        .fillColor("#003366")
        .text("Contact Us:", startX, doc.y, {
          underline: true,
        });

      doc.moveDown(0.3);
      doc.font("Helvetica").fontSize(9.5).fillColor("#000000");
      doc.text(
        "Zager Digital Services, Startup Enclave Building, CSIT Campus, Shivaji Nagar, Balod Road, Durg, Chhattisgarh 491001",
        startX
      );
      doc.text("+91-9407655717", startX);
      doc.text("zhack.zager@gmail.com", startX);

      doc.moveDown(1.2);
      doc.moveTo(30, doc.y).lineTo(570, doc.y).stroke();
      doc.moveDown(0.4);
      doc
        .fontSize(9.5)
        .fillColor("#007ACC")
        .text("Thank you for registering!", { align: "center" });
      doc.fontSize(9).fillColor("#000000").text("", {
        align: "center",
      });

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};

// Function to send confirmation email with registration pass
const sendConfirmationEmail = async (
  applicantEmail,
  teamName,
  registrationID,
  phone1,
  hackathonType,
  members
) => {
  try {
    const transporter = createTransporter();

    // Generate registration pass PDF
    const pdfBuffer = await generateRegistrationPass(
      teamName,
      registrationID,
      applicantEmail,
      phone1,
      hackathonType,
      members,
      members[0]
    );

    const mailOptions = {
      from: `"Hackathon Team" <${senderEmail.user}>`,
      to: applicantEmail,
      subject: "✅ Hackathon Registration Confirmation & Pass",
      html: `
        <h2>Welcome to the Hackathon!</h2>
        <p>Dear ${teamName},</p>
        <p>Thank you for registering for our hackathon. Your registration ID is <strong>${registrationID}</strong>.</p>
        <p>Your official Hackathon Registration Pass is attached.</p>
        <p>We will contact you soon with further details.</p>
        <p>Best Regards,</p>
        <p><strong>Hackathon Team</strong></p>
      `,
      attachments: [
        {
          filename: `Hackathon_Pass_${registrationID}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log(
      "📩 Confirmation Email Sent with Registration Pass:",
      applicantEmail
    );
  } catch (error) {
    console.error("❌ Error Sending Confirmation Email:", error.message);
  }
};

// Hackathon Registration Controller
const registerForHackathon = async (req, res) => {
  try {
    console.log("🔹 Received Hackathon Registration:", req.body);

    // Extract fields from request body
    let {
      teamName,
      email,
      phone1,
      phone2,
      Occupation,
      members,
      hackathonType,
      registrationID,
    } = req.body;

    // Convert members to an array if it is a string
    if (typeof members === "string") {
      members = members.split(",").map((m) => m.trim());
    }

    // Get current date and time
    const registrationTimestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    }); // Adjust timezone if needed

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
          "All fields (Team Name, Email, Two Contact Numbers, Occupation, Members, Hackathon Type, Registration ID) are required.",
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

    // Prepare email content for admin
    const adminHtmlContent = `
      <h2>New Hackathon Registration</h2>
      <p><strong>Team Name:</strong> ${teamName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Primary Contact:</strong> ${phone1}</p>
      <p><strong>Secondary Contact:</strong> ${phone2}</p>
      <p><strong>Occupation:</strong> ${Occupation}</p>
      <p><strong>Team Members:</strong> ${members.join(", ")}</p>
      <p><strong>Hackathon Type:</strong> ${hackathonType}</p>
      <p><strong>Registration ID:</strong> ${registrationID}</p>
      <p><strong>Registration Time:</strong> ${registrationTimestamp}</p>
    `;

    // Attachment (Payment Receipt)
    const attachments = [
      { filename: req.file.originalname, content: req.file.buffer },
    ];

    // Create transporter
    const transporter = createTransporter();

    // Mail options for admin
    const mailOptionsAdmin = {
      from: `"Hackathon Team" <${senderEmail.user}>`,
      to: recipientEmails.join(", "),
      subject: "🔹 New Hackathon Registration Submission",
      html: adminHtmlContent,
      attachments,
    };

    // Send email to admin
    await transporter.sendMail(mailOptionsAdmin);
    console.log("✅ Hackathon Registration Email Sent to Admin");

    // Send confirmation email with registration pass
    await sendConfirmationEmail(
      email,
      teamName,
      registrationID,
      phone1,
      hackathonType,
      members,
      registrationTimestamp
    );

    return res.status(200).json({
      success: true,
      message:
        "Your hackathon registration has been submitted successfully! A confirmation email with your registration pass has been sent.",
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
