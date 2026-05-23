const express = require("express");
const path = require("path");

const app = express();

// static files serve karo
app.use(express.static(__dirname));

// root pe index.html dikhao
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running 🚀");
});