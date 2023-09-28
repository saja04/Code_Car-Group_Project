const { Router } = require("express");
const postCars = require("../Controllers/postCars");

const router = Router();

//ROUTES CARS
router.post("/cars", postCars);

//ROUTES USER

//ROUTES ADMIN

module.exports = router;
