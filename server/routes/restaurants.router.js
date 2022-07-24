const express = require("express");
const {
  createRestaurant,
  getAllRestaurants,
} = require("../controllers/restaurants.controller");

const restaurantsRouter = express.Router();

restaurantsRouter.route("/").post(createRestaurant);
restaurantsRouter.route("/").get(getAllRestaurants);

module.exports = restaurantsRouter;
