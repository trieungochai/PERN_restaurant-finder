const pool = require("../DB/index");

const createRestaurant = async (req, res) => {
  const { name, location, price_range } = req.body;
  // Validation
  if (!name || !location || !price_range)
    return res.status(400).json({
      success: false,
      message: "Restaurant name/location/price range must be provided",
    });

  try {
    const newRestaurant = await pool.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *",
      [name, location, price_range]
    );

    return res.status(201).json({
      success: true,
      message: "Successfully created",
      restaurant: newRestaurant.rows,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await pool.query("SELECT * FROM restaurants");
    return res
      .status(200)
      .json({
        success: true,
        length: restaurants.rows.length,
        restaurants: restaurants.rows,
      });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { createRestaurant, getAllRestaurants };
