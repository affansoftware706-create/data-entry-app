const express = require('express');
const app = express();

// 🔥 IMPORTANT (Railway ke liye)
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});