const { Router } = require("express");
const postCars = require("../Controllers/postCars");
const getCars = require("../Controllers/getCars");
const getCarsByName = require("../Controllers/getCarsByName");

const router = Router();

//ROUTES CARS
router.post("/cars", postCars);
router.get('/cars', getCars)
router.get('/carsName/', getCarsByName)

//ROUTES USER

//ROUTES ADMIN

module.exports = router;
