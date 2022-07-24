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
    return res.status(200).json({
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

const getSingleRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await pool.query(
      "SELECT * FROM restaurants WHERE id = $1",
      [id]
    );

    return res.status(200).json({ success: true, restaurant: restaurant.rows });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const { name, location, price_range } = req.body;
  if (!name || !location || !price_range)
    return res
      .status(400)
      .json({ success: false, message: "Restaurant name must be provided" });

  try {
    const updatedRestaurant = await pool.query(
      "UPDATE restaurants SET (name, location, price_range) = ($1, $2, $3) WHERE id = $4",
      [name, location, price_range, id]
    );

    return res
      .status(200)
      .json({
        success: true,
        message: "Successfully updated",
        updatedRestaurant: updatedRestaurant.rows,
      });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getSingleRestaurant,
  updateRestaurant,
};
