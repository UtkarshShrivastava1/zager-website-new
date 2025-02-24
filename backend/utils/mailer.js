const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: process.env.EMAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

exports.sendOTPEmail = async (to, otp) => {
  try {
    const mailOptions = {
      from: `"Blog Admin" <${process.env.EMAIL_USER}>`,
      to,
      subject: 'Password Reset OTP',
      html: `<b>Your OTP is: ${otp}</b><p>Valid for 10 minutes</p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email send error:', error);
    throw new Error('Failed to send OTP email');
  }
};