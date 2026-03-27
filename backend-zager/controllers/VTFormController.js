// const nodemailer = require("nodemailer");
// const Resend = require("resend");
// const PDFDocument = require("pdfkit");
// const axios = require("axios"); 
// require("dotenv").config();

// // Email recipients (Admins)
// const recipientEmails = [
//   process.env.EMAIL_RECEIVER_VT_1 || "",
//   process.env.EMAIL_RECEIVER_VT_2 || "",
// ];

// console.log("process.env.EMAIL_USER_VT : ", process.env.EMAIL_RECEIVER_VT_1);

// // Email sender credentials
// const senderEmail = {
//   user: "vvinaykumar3000@gmail.com",
//   pass:  "nmqtwawwfedvpzlhnh"
// };
// console.log(`  user: process.env.EMAIL_USER_VT || "" : ${senderEmail.user} `)
// console.log(`  pass: process.env.EMAIL_PASS_VT : ${senderEmail.pass} `);

// // Create email transporter function
// const createTransporter = () => {
//   console.log("🔧 Creating nodemailer transporter...");
//   // return nodemailer.createTransport({
//   //   host: "smtp.gmail.com",
//   //   port: 587,
//   //   secure: false,
//   //   auth: {
//   //     user: senderEmail.user,
//   //     pass: senderEmail.pass,
//   //   },
//   //   tls: {
//   //     rejectUnauthorized: false,
//   //   },
//   // });
//   Resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'vvinaykumar3000@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });
// };

// // Function to generate registration pass content
// const generateRegistrationPass = async (
//   name,
//   registrationID,
//   email,
//   phone,
//   semester,
//   branch,
//   college,
//   address,
// ) => {
//   const now = new Date();
//   const formattedDate = now.toLocaleString("en-IN", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

  

//   return `
//     <div style="padding: 20px; border: 2px solid #003366; border-radius: 10px;">
//       <h2 style="color: #003366;">Vocational Training Registration Details</h2>
//       <p><strong>Registration ID:</strong> ${registrationID}</p>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Semester:</strong> ${semester}</p>
//       <p><strong>Branch:</strong> ${branch}</p>
//       <p><strong>College:</strong> ${college}</p>
//       <p><strong>Address:</strong> ${address}</p>
//       <p><strong>Registration Date:</strong> ${formattedDate}</p>
//       <hr>
//       <p style="color: #003366;"><strong>Training Venue:</strong></p>
//       <p>Zager Digital Services, Startup Enclave Building,<br>
//          CSIT Campus, Shivaji Nagar,<br>
//          Balod Road, Durg, Chhattisgarh 491001</p>
//     </div>
//   `;
// };

// // Function to generate PDF confirmation
// const generateConfirmationPDF = async (
//   name,
//   registrationID,
//   email,
//   phone,
//   semester,
//   branch,
//   college,
//   address,
// ) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       console.log("📄 Generating confirmation PDF for:", name);
//       const doc = new PDFDocument({
//         margin: 50,
//         size: "A4",
//         autoFirstPage: true,
//         bufferPages: true,
//       });
//       let buffers = [];
//       doc.on("data", buffers.push.bind(buffers));
//       doc.on("end", () => {
//         console.log("✅ PDF generation complete. Returning buffer.");
//         resolve(Buffer.concat(buffers));
//       });

//       // Header with updated background color
//       doc.rect(0, 0, doc.page.width, 120).fill("#051224");

//       // Logo
//       const logoUrl =
//         "https://www.zager.in/assets/Final_Logo_White-BsljKSah.png";
//       const response = await axios.get(logoUrl, {
//         responseType: "arraybuffer",
//       });
//       const logoBuffer = Buffer.from(response.data, "binary");
//       doc.image(logoBuffer, 50, 20, { width: 80 });

//       // Header Text - Moved right
//       doc
//         .fillColor("#ffffff")
//         .font("Helvetica-Bold")
//         .fontSize(24)
//         .text("Vocational Training", 180, 40)
//         .fontSize(18)
//         .text("Registration Confirmation", 180, 70);

//       // Registration ID Box - Increased height
//       doc
//         .rect(doc.page.width - 200, 140, 150, 40)
//         .fillAndStroke("#f0f0f0", "#003366");
//       doc
//         .fillColor("#003366")
//         .fontSize(12)
//         .text(`Registration ID: ${registrationID}`, doc.page.width - 190, 153, {
//           width: 130,
//         });

//       // Current Date Time Box
//       const currentDateTime = new Date().toLocaleString("en-IN", {
//         timeZone: "Asia/Kolkata",
//         dateStyle: "medium",
//         timeStyle: "short",
//       });
//       doc.rect(50, 140, 250, 40).fillAndStroke("#f0f0f0", "#003366");
//       doc
//         .fillColor("#003366")
//         .fontSize(12)
//         .text(`Registration Date: ${currentDateTime}`, 60, 153);

//       // Add welcome message
//       doc
//         .fillColor("#003366")
//         .font("Helvetica-Bold")
//         .fontSize(18)
//         .text("Welcome to", 50, 200, { align: "center" })
//         .fontSize(20)
//         .text("Zager Digital Services", 50, 225, { align: "center" })
//         .fontSize(18)
//         .text("Vocational Training 2025", 50, 250, { align: "center" });

//       // Add decorative line
//       doc
//         .moveTo(150, 285)
//         .lineTo(doc.page.width - 150, 285)
//         .strokeColor("#003366")
//         .strokeOpacity(0.3)
//         .stroke();

//       // Main Content - Adjusted Y position
//       doc.moveDown(4);

//       // Personal Information Section
//       doc
//         .fillColor("#003366")
//         .font("Helvetica-Bold")
//         .fontSize(16)
//         .text("Personal Information", 50, 300);

//       // Adjust startY for all following content
//       const startY = 330;

//       // Styled info grid
//       const colWidth = 250;
//       const rowHeight = 25;
//       const leftCol = 50;
//       const rightCol = doc.page.width / 2 + 20;

//       const addGridInfo = (label, value, x, y) => {
//         doc
//           .fillColor("#666666")
//           .font("Helvetica")
//           .fontSize(10)
//           .text(label, x, y);
//         doc
//           .fillColor("#000000")
//           .font("Helvetica-Bold")
//           .fontSize(12)
//           .text(value, x, y + 15);
//       };

//       // Left Column
//       addGridInfo("Full Name", name, leftCol, startY);
//       addGridInfo("Email Address", email, leftCol, startY + rowHeight * 2);
//       addGridInfo("Phone Number", phone, leftCol, startY + rowHeight * 4);
//       addGridInfo("Semester", semester, leftCol, startY + rowHeight * 6);

//       // Right Column
//       addGridInfo("Branch", branch, rightCol, startY);
//       addGridInfo("College", college, rightCol, startY + rowHeight * 2);
//       addGridInfo("Address", address, rightCol, startY + rowHeight * 4);

//       // Venue Section - Fixed symbols and reduced spacing
//       doc
//         .fillColor("#003366")
//         .font("Helvetica-Bold")
//         .fontSize(16)
//         .text("Training Venue", 50, startY + rowHeight * 8);

//       // Update the venue section in generateConfirmationPDF
//       const venueY = startY + rowHeight * 9;

//       // Add a styled venue box with gradient background
//       doc
//         .save()
//         .rect(50, venueY, doc.page.width - 100, 100)
//         .fill("#f8f8f8");

//       // Add a blue accent bar on the left
//       doc.rect(50, venueY, 5, 100).fill("#003366");

//       // Add venue title with underline
//       doc
//         .fillColor("#003366")
//         .font("Helvetica-Bold")
//         .fontSize(14)
//         .text("Training Venue", 70, venueY + 10);

//       // Add styled venue details
//       doc
//         .font("Helvetica")
//         .fontSize(12)
//         .fillColor("#333333")
//         .text("Zager Digital Services", 70, venueY + 30)
//         .fillColor("#666666")
//         .text("Startup Enclave Building", 70, venueY + 45)
//         .text("CSIT Campus, Shivaji Nagar", 70, venueY + 60)
//         .text("Balod Road, Durg, Chhattisgarh 491001", 70, venueY + 75);

//       // Add Contact Information Section
//       const contactY = venueY + 120; // Position below venue

//       // Add contact section title
//       doc
//         .fillColor("#003366")
//         .font("Helvetica-Bold")
//         .fontSize(14)
//         .text("Contact Information", 50, contactY);

//       // Add contact details with styling and reduced spacing
//       const contactDetails = [
//         { label: "Mobile:", value: "+91-9201239968, +91-9407655777" },
//         { label: "Email:", value: "vt.zager@gmail.com" },
//         { label: "Website:", value: "www.zager.in" },
//       ];

//       let currentY = contactY + 15; // Reduced spacing from 20 to 15

//       contactDetails.forEach(({ label, value }) => {
//         doc
//           .font("Helvetica-Bold")
//           .fontSize(10)
//           .fillColor("#666666")
//           .text(label, 50, currentY, { continued: true })
//           .font("Helvetica")
//           .fillColor("#333333")
//           .text(` ${value}`, {
//             link: label === "Website:" ? "https://www.zager.in" : null,
//           });

//         currentY += 12; // Reduced spacing from 15 to 12
//       });

//       // Adjusted outro position and styling
//       const outroY = currentY + 15; // Reduced from 30 to 15

//       // Compact outro message
//       doc
//         .font("Helvetica")
//         .fontSize(10) // Reduced from 11 to 10
//         .fillColor("#666666")
//         .text("Best Regards,", 50, outroY)
//         .font("Helvetica-Bold")
//         .fillColor("#003366")
//         .text("Zager Digital Services Team", 50, outroY + 12); // Reduced spacing

//       // Adjusted footer position
//       const footerY = doc.page.height - 25; // Moved up slightly

//       // Update page border
//       doc
//         .rect(20, 20, doc.page.width - 40, doc.page.height - 40)
//         .strokeColor("#003366")
//         .strokeOpacity(0.2)
//         .stroke();

//       doc.end();
//     } catch (error) {
//       console.error("❌ Error during PDF generation:", error);
//       reject(error);
//     }
//   });
// };

// // Function to send confirmation email
// const sendConfirmationEmail = async (
//   email,
//   name,
//   registrationID,
//   phone,
//   semester,
//   branch,
//   college,
//   address,
// ) => {
//   try {
//     console.log(`🚀 Starting sendConfirmationEmail for ${email}...`);
//     const transporter = createTransporter();
//     console.log("📄 Generating registration pass content for email body...");
//     const registrationDetails = await generateRegistrationPass(
//       name,
//       registrationID,
//       email,
//       phone,
//       semester,
//       branch,
//       college,
//       address,
//     );

    

//     console.log("📄 Generating confirmation PDF attachment...");
//     const pdfBuffer = await generateConfirmationPDF(
//       name,
//       registrationID,
//       email,
//       phone,
//       semester,
//       branch,
//       college,
//       address,
//     );
//     console.log("✅ PDF attachment generated successfully.");


//     const mailOptions = {
//       from: `"Zager Digital Services Vocational Training Team" <${senderEmail.user}>`,
//       to: email,
//       subject:
//         "✅ Zager Digital Services Vocational Training Registration Confirmation",
//       html: `
//         <h2>Welcome to Zager Digital Services Vocational Training 2025!</h2>
//         <p>Dear ${name},</p>
//         <p>Thank you for registering for our Vocational Training program. Your registration ID is <strong>${registrationID}</strong>.</p>
//         ${registrationDetails}
//         <p>Please find your registration confirmation PDF attached.</p>
//         <p>We will contact you soon with further details.</p>
//         <p>Best Regards,</p>
//         <p><strong>Zager Digital Services Training Team</strong></p>
//       `,
//       attachments: [
//         {
//           filename: `VT_Registration_${registrationID}.pdf`,
//           content: pdfBuffer,
//           contentType: "application/pdf",
//         },
//       ],
//     };

   

//     console.log("📧 Sending confirmation email to student...");
//     await transporter.sendMail(mailOptions);
//     console.log("📩 Confirmation Email Sent:", email);
//   } catch (error) {
//     console.error("❌ Error in sendConfirmationEmail:", error.stack);
//   }
// };

// // Vocational Training Registration Controller
// const registerForTraining = async (req, res) => {
//   console.log("🚀 Starting registerForTraining process...");
//   try {
//     console.log("🔹 Received Training Registration Request Body:", req.body);

//     const {
//       name,
//       semester,
//       phone,
//       email,
//       branch,
//       college,
//       address,
//       registrationID,
//     } = req.body;

//     console.log("🔍 Validating request data...");
//     // Validate required fields
//     if (
//       !name ||
//       !semester ||
//       !phone ||
//       !email ||
//       !branch ||
//       !college ||
//       !address ||
//       !registrationID
//     ) {
//       console.warn("⚠️ Validation failed: Missing required fields.");
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required.",
//       });
//     }

//     // Validate email format
//     const emailRegex = /^\S+@\S+\.\S+$/;
//     if (!emailRegex.test(email)) {
//       console.warn("⚠️ Validation failed: Invalid email format.");
//       return res
//         .status(400)
//         .json({ success: false, message: "Invalid email format." });
//     }

//     // Validate phone number
//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(phone)) {
//       console.warn("⚠️ Validation failed: Invalid phone number format.");
//       return res.status(400).json({
//         success: false,
//         message: "Invalid phone number format (10 digits required).",
//       });
//     }

//     console.log("✅ Validation passed.");

//     // Prepare email content for admin with enhanced styling
//     const adminHtmlContent = `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//         <div style="background-color: #051224; padding: 20px; border-radius: 8px 8px 0 0;">
//             <h2 style="color: #ffffff; margin: 0; text-align: center;">New Zager Digital Services Vocational Training Registration</h2>
//         </div>
        
//         <div style="border: 1px solid #e0e0e0; border-radius: 0 0 8px 8px; padding: 20px;">
//             <div style="margin-bottom: 20px;">
//                 <p style="color: #666; margin: 0;">A new student has registered for Zager Digital Services Vocational Training 2025</p>
//             </div>

//             <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px; margin-bottom: 20px;">
//                 <h3 style="color: #003366; margin-top: 0; border-bottom: 2px solid #003366; padding-bottom: 8px;">
//                     Personal Information
//                 </h3>
//                 <table style="width: 100%; border-collapse: collapse;">
//                     <tr>
//                         <td style="padding: 8px 0; color: #666;"><strong>Name:</strong></td>
//                         <td style="padding: 8px 0; color: #333;">${name}</td>
//                     </tr>
//                     <tr>
//                         <td style="padding: 8px 0; color: #666;"><strong>Registration ID:</strong></td>
//                         <td style="padding: 8px 0; color: #333;">${registrationID}</td>
//                     </tr>
//                     <tr>
//                         <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
//                         <td style="padding: 8px 0; color: #333;">${email}</td>
//                     </tr>
//                     <tr>
//                         <td style="padding: 8px 0; color: #666;"><strong>Phone:</strong></td>
//                         <td style="padding: 8px 0; color: #333;">${phone}</td>
//                     </tr>
//                 </table>
//             </div>

//             <div style="background-color: #f8f9fa; padding: 15px; border-radius: 6px;">
//                 <h3 style="color: #003366; margin-top: 0; border-bottom: 2px solid #003366; padding-bottom: 8px;">
//                     Academic Details
//                 </h3>
//                 <table style="width: 100%; border-collapse: collapse;">
//                     <tr>
//                         <td style="padding: 8px 0; color: #666;"><strong>Semester:</strong></td>
//                         <td style="padding: 8px 0; color: #333;">${semester}</td>
//                     </tr>
//                     <tr>
//                         <td style="padding: 8px 0; color: #666;"><strong>Branch:</strong></td>
//                         <td style="padding: 8px 0; color: #333;">${branch}</td>
//                     </tr>
//                     <tr>
//                         <td style="padding: 8px 0; color: #666;"><strong>College:</strong></td>
//                         <td style="padding: 8px 0; color: #333;">${college}</td>
//                     </tr>
//                     <tr>
//                         <td style="padding: 8px 0; color: #666;"><strong>Address:</strong></td>
//                         <td style="padding: 8px 0; color: #333;">${address}</td>
//                     </tr>
//                 </table>
//             </div>

//             <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 6px;">
//                 <p style="color: #666; margin: 0; font-size: 0.9em;">
//                     <strong>Registration Time:</strong> 
//                     <span style="color: #333;">${new Date().toLocaleString(
//                       "en-IN",
//                       {
//                         timeZone: "Asia/Kolkata",
//                         dateStyle: "full",
//                         timeStyle: "medium",
//                       },
//                     )}</span>
//                 </p>
//             </div>
//         </div>
        
//         <div style="text-align: center; margin-top: 20px; color: #666; font-size: 0.8em;">
//             <p>This is an automated message from Zager Digital Services Training Portal</p>
//         </div>
//     </div>
// `;

//     // Create transporter
//     const transporter = createTransporter();

//     // Mail options for admin
//     const mailOptionsAdmin = {
//       from: `"Training Team" <${senderEmail.user}>`,
//       to: recipientEmails.join(", "),
//       subject: "🔹 New Zager Digital Services Vocational Training Registration",
//       html: adminHtmlContent,
//     };

//     console.log("📧 Preparing to send email to admin...");
//     // Send email to admin
//     console.log("...Admin mailOptions:", { from: mailOptionsAdmin.from, to: mailOptionsAdmin.to, subject: mailOptionsAdmin.subject });
//     await transporter.sendMail(mailOptionsAdmin);
//     console.log("✅ Registration Email Sent to Admin");

//     console.log("📧 Preparing to send confirmation email to student...");
//     // Send confirmation email to student
//     await sendConfirmationEmail(
//       email,
//       name,
//       registrationID,
//       phone,
//       semester,
//       branch,
//       college,
//       address,
//     );

//     console.log("✅ Successfully processed registration for:", registrationID);
//     return res.status(200).json({
//       success: true,
//       message:
//         "Your registration has been submitted successfully! A confirmation email has been sent.",
//     });
//   } catch (error) {
//     console.error("❌ Error in registerForTraining:", error.stack);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while processing your registration.",
//     });
//   }
// };

// module.exports = {
//     registerForTraining,
// };

// ================== IMPORTS ==================

// const nodemailer = require("nodemailer"); // ❌ kept for reference (not used)
const { Resend } = require("resend"); // ✅ Correct import
const PDFDocument = require("pdfkit");
const axios = require("axios");
require("dotenv").config();

// ================== RESEND SETUP ==================

const resend = new Resend(process.env.RESEND_API_KEY);

// ================== ADMIN EMAILS ==================

const recipientEmails = [
  process.env.EMAIL_RECEIVER_VT_1 || "",
  process.env.EMAIL_RECEIVER_VT_2 || "",
];

// ================== GENERATE HTML ==================

const generateRegistrationPass = async (
  name,
  registrationID,
  email,
  phone,
  semester,
  branch,
  college,
  address
) => {
  const now = new Date();
  const formattedDate = now.toLocaleString("en-IN");
  console.log(formattedDate)

  return `
    <div style="padding:20px;border:2px solid #003366;border-radius:10px;">
      <h2>Vocational Training Registration</h2>
      <p><strong>ID:</strong> ${registrationID}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Semester:</strong> ${semester}</p>
      <p><strong>Branch:</strong> ${branch}</p>
      <p><strong>College:</strong> ${college}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Date:</strong> ${formattedDate}</p>
    </div>
  `;
};

// ================== GENERATE PDF ==================

const generateConfirmationPDF = async (
  name,
  registrationID,
  email,
  phone,
  semester,
  branch,
  college,
  address
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = new PDFDocument();
      let buffers = [];

      doc.on("data", buffers.push.bind(buffers));
      doc.on("end", () => resolve(Buffer.concat(buffers)));

      doc.fontSize(20).text("Training Registration", { align: "center" });
      doc.moveDown();

      doc.text(`Name: ${name}`);
      doc.text(`ID: ${registrationID}`);
      doc.text(`Email: ${email}`);
      doc.text(`Phone: ${phone}`);
      doc.text(`Semester: ${semester}`);
      doc.text(`Branch: ${branch}`);
      doc.text(`College: ${college}`);
      doc.text(`Address: ${address}`);

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
};

// ================== SEND STUDENT EMAIL ==================

const sendConfirmationEmail = async (
  email,
  name,
  registrationID,
  phone,
  semester,
  branch,
  college,
  address
) => {
  try {
    const registrationDetails = await generateRegistrationPass(
      name,
      registrationID,
      email,
      phone,
      semester,
      branch,
      college,
      address
    );
    console.log("registrationDetails...." , registrationDetails )
 
    console.log("📄 Generating confirmation PDF...");
    const pdfBuffer = await generateConfirmationPDF(
      name,
      registrationID,
      email,
      phone,
      semester,
      branch,
      college,
      address
    );
    console.log("email : " , email);

    await resend.emails.send({
      from: "Zager Training  <noreply@zager.in>",
      to: email,
      subject: "✅ Registration Confirmation",
      html: `
        <h2>Welcome ${name}</h2>
        <p>Your Registration ID: <b>${registrationID}</b></p>
        ${registrationDetails}
      `,
      attachments: [
        {
          filename: `VT_${registrationID}.pdf`,
          content: pdfBuffer.toString("base64"),
        },
      ],
    });

    console.log("✅ Student Email Sent");
  } catch (error) {
    console.error("❌ Student Email Error:", error.message);
  }
};

// ================== MAIN CONTROLLER ==================

const registerForTraining = async (req, res) => {
  try {
    console.log("📥 Data:", req.body);

    const {
      name,
      semester,
      phone,
      email,
      branch,
      college,
      address,
      registrationID,
    } = req.body;

    // Validation
    if (
      !name ||
      !semester ||
      !phone ||
      !email ||
      !branch ||
      !college ||
      !address ||
      !registrationID
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    // ================== ADMIN EMAIL ==================

    const adminHtml = `
      <h2>New Registration</h2>
      <p>Name: ${name}</p>
      <p>ID: ${registrationID}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
    `;
 
    console.log(recipientEmails.join(", "));

    await resend.emails.send({
      from: "Zager Training <noreply@zager.in>",
      to: recipientEmails.join(", "),
      subject: "New Registration",
      html: adminHtml,
    });

    console.log("✅ Admin Email Sent");

    // ================== STUDENT EMAIL ==================

    await sendConfirmationEmail(
      email,
      name,
      registrationID,
      phone,
      semester,
      branch,
      college,
      address
    );

    return res.status(200).json({
      success: true,
      message: "Registration successful. Email sent.",
    });
  } catch (error) {
    console.error("❌ Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ================== EXPORT ==================

module.exports = {
  registerForTraining,
};