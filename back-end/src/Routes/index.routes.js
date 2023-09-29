const { Router } = require("express");
const {postCarsHandler} = require("../Handlers/postCarshandler");
const {getCarsHandler} = require("../Handlers/getCarshandler");
const {deleteCarsHandler} = require("../Handlers/deleteCarshandler")

const router = Router();

//ROUTES CARS
router.post("/cars", postCarsHandler);
router.get('/cars', getCarsHandler)
router.get('/cars/delete', deleteCarsHandler)

//ROUTES USER

//ROUTES ADMIN

module.exports = router;
