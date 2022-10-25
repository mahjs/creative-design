const express = require("express");
const path = require("path");

const app = express();

// Get Main Files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname + "/style.css"));
});
app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname + "/script.js"));
});

// Get The Images
app.get("/images/customer-img-1.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/customer-img-1.jpg"));
});
app.get("/images/customer-img-2.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/customer-img-2.jpg"));
});
app.get("/images/customer-img-3.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/customer-img-3.jpg"));
});

app.get("/images/team-member-1.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/team-member-1.jpg"));
});
app.get("/images/team-member-2.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/team-member-2.jpg"));
});
app.get("/images/team-member-3.jpg", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/team-member-3.jpg"));
});

app.get("/images/form-img.png", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/form-img.png"));
});

app.listen(process.env.PORT || 3000);
