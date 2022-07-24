const express = require("express");
const { createRestaurant } = require("../controllers/restaurants.controller");

const restaurantsRouter = express.Router();

restaurantsRouter.route("/").post(createRestaurant);

module.exports = restaurantsRouter;
