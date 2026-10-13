const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const { sendContactEmail } = require("../utils/mailer");

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are all required.",
      });
    }

    const savedContact = await Contact.create({ name, email, message });

    try {
      await sendContactEmail({ name, email, message });
    } catch (mailErr) {
      console.error("Email sending failed:", mailErr.message);
    }

    res.status(201).json({
      success: true,
      message: "Message received successfully",
      data: savedContact,
    });
  } catch (err) {
    console.error("Contact route error:", err.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

module.exports = router;