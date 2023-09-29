const { Router } = require("express");
<<<<<<< HEAD
const {postCarsHandler} = require("../Handlers/postCarshandler");
const {getCarsHandler} = require("../Handlers/getCarshandler");
const {deleteCarsHandler} = require("../Handlers/deleteCarshandler")
=======
const postCars = require("../Controllers/postCars");
const getCars = require("../Controllers/getCars");
const getCarsByName = require("../Controllers/getCarsByName");
>>>>>>> a22b94eeab06ab9bf35e73b1caab942f9e4f2664

const router = Router();

//ROUTES CARS
<<<<<<< HEAD
router.post("/cars", postCarsHandler);
router.get('/cars', getCarsHandler)
router.get('/cars/delete', deleteCarsHandler)
=======
router.post("/cars", postCars);
router.get('/cars', getCars)
router.get('/carsName/', getCarsByName)
>>>>>>> a22b94eeab06ab9bf35e73b1caab942f9e4f2664

//ROUTES USER

//ROUTES ADMIN

module.exports = router;
