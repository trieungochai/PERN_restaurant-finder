CREATE DATABASE yelp;

-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE restaurants (
  id uuid DEFAULT uuid_generate_v4(),
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL CHECK(
    price_range >= 1
    AND price_range <= 5
  ),
  PRIMARY KEY (id)
);
