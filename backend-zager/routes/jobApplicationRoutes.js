// routes/jobApplicationRoutes.js
const express = require("express");
const router = express.Router();
const {
  createJobApplication,
  uploadJobResume,
} = require("../controllers/jobApplicationController");

// POST /api/job-applications - Submit a job application with resume upload
router.post("/", uploadJobResume, createJobApplication);

module.exports = router;
