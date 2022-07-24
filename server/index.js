const express = require("express");
const restaurantsRouter = require("./routes/restaurants.router");
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1/restaurants", restaurantsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
