const express = require("express");
const {
  createRestaurant,
  getAllRestaurants,
  getSingleRestaurant,
  updateRestaurant,
} = require("../controllers/restaurants.controller");

const restaurantsRouter = express.Router();

restaurantsRouter.route("/").post(createRestaurant);
restaurantsRouter.route("/").get(getAllRestaurants);
restaurantsRouter.route("/:id").get(getSingleRestaurant);
restaurantsRouter.route("/:id").put(updateRestaurant);

module.exports = restaurantsRouter;
