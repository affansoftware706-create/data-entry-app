const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// 🔥 MongoDB Connection
mongoose.connect("mongodb+srv://affansoftware706_db_user:yqpDP6U4wjnGc5Bv@cluster0.uukoqhn.mongodb.net/dataEntryDB?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// 📦 Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

// 📁 Model
const User = mongoose.model("User", UserSchema);

// 🏠 Test Route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// 💾 Save Data API
app.post("/add-user", async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = new User({ name, email });
    await newUser.save();

    res.send("User saved ✅");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving user ❌");
  }
});

// 🚀 Server Start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const path = require("path");

// static folder serve karo
app.use(express.static(__dirname));

// root pe index.html dikhao
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});