const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(helmet());

//Routes
const contactFormRoutes = require("./routes/contactForm");

app.use("/api", contactFormRoutes);

module.exports = app;
