const nodemailer = require("nodemailer");
const { Resend } = require("resend");

/* ---------------------------------------------
   Recipient configuration
--------------------------------------------- */
const recipientEmails = [
  process.env.EMAIL_RECEIVER_1 || "utkarshzager@gmail.com",
  process.env.EMAIL_RECEIVER_2 || "career.zager@gmail.com",
];

const senderEmail = {
  user: process.env.EMAIL_USER_CAREER || "career.zager@gmail.com",
  pass: process.env.EMAIL_PASS_CAREER || "zainyleqazvzekyw", // Gmail app password (only used locally)
};

/* ---------------------------------------------
   Gmail Transport (for local)
--------------------------------------------- */
const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: senderEmail.user,
      pass: senderEmail.pass,
    },
    tls: { rejectUnauthorized: false },
  });

/* ---------------------------------------------
   Contact Form Controller (Hybrid)
--------------------------------------------- */
const createContact = async (req, res) => {
  try {
    console.log("📩 Received a new contact request:", req.body);

    const { name, companyName, email, phone, message } = req.body;

    if (!name || !companyName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const htmlContent = `
      <div style="font-family: system-ui, sans-serif; line-height: 1.6;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      </div>
    `;

    // Detect Render or local environment
    const isRender =
      process.env.RENDER === "true" || process.env.NODE_ENV === "production";

    console.log("Environment:", isRender ? "Render (Resend)" : "Local (Gmail)");

    /* ---------------------------------------------
       🔹 Render (Resend) Mode
    --------------------------------------------- */
    if (isRender) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: `Zager Contact <${senderEmail.user}>`,
        to: recipientEmails,
        subject: "New Contact Us Submission",
        html: htmlContent,
      });

      console.log("✅ Email sent successfully via Resend API");
    } else {
      /* ---------------------------------------------
       🔸 Local (Gmail SMTP) Mode
    --------------------------------------------- */
      const transporter = createTransporter();

      const mailOptions = {
        from: senderEmail.user,
        to: recipientEmails,
        subject: "New Contact Us Submission",
        html: htmlContent,
      };

      await transporter.sendMail(mailOptions);
      console.log("✅ Email sent successfully via Gmail SMTP");
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully to both recipients.",
    });
  } catch (error) {
    console.error("❌ Error sending contact email:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while sending your message.",
    });
  }
};

module.exports = { createContact };
