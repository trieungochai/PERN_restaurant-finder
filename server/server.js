const express = require("express");
const app = express();

// middleware
app.use(express.json());

// routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
