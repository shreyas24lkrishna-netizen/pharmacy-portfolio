require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Portfolio backend is running");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.post("/api/connect", async (req, res) => {
  const { name, email, phone, source } = req.body;

  if (!name || !email || !phone) {
    return res
      .status(400)
      .json({ message: "Please fill out name, email, and phone." });
  }

  const origin = source || "Let's Connect";

  try {
    await transporter.sendMail({
      from: '"Portfolio Connect" <' + process.env.GMAIL_USER + ">",
      to: process.env.RECEIVER_EMAIL,
      subject: "New Portfolio Connection (" + origin + "): " + name,
      text:
        "Name: " +
        name +
        "\nEmail: " +
        email +
        "\nPhone: " +
        phone +
        "\nTriggered From: " +
        origin,
      html:
        "<h3>New Portfolio Submission</h3>" +
        "<p><strong>Name:</strong> " +
        name +
        "</p>" +
        "<p><strong>Email:</strong> " +
        email +
        "</p>" +
        "<p><strong>Phone:</strong> " +
        phone +
        "</p>" +
        "<p><strong>Triggered From:</strong> " +
        origin +
        "</p>",
    });

    res.status(200).json({ message: "Sent to email successfully!" });
  } catch (error) {
    console.error("Email send failed:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:" + PORT);
});