const express = require("express");
const router = express.Router();
const contactFormController = require("../controllers/contactForm");

router.post("/contact", contactFormController.submitContactForm);

module.exports = router;
