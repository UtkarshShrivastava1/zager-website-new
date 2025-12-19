// models/ContactModel.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    companyName: {
      type: String,
      required: [true, "Company Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    inqury: {
      type: String,
      required: [true, "Inquiry type is required"],
      enum: {
        values: [
          "swaad-setu",
          "doctor-z",
          "career",
          "intern",
          "digital-marketing",
        ],
        message: "Invalid inquiry type",
      },
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
