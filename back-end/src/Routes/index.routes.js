const { Router } = require("express");
const postCarsHandler = require("../Handlers/postCarsHandler");
const getCarsHandler = require("../Handlers/getCarsHandler");
const deleteCarsHandler = require("../Handlers/deleteCarsHandler");
const getCarsByNameHandler = require("../Handlers/getCarsByNameHandler");
const getCarsByIdHandler = require("../Handlers/getCarsByIdHandler");

const router = Router();

//ROUTES CARS
router.post("/carsPost", postCarsHandler);
router.post("/cars", getCarsHandler);
router.get("/carsDelete/:id", deleteCarsHandler);
router.get("/carsName/", getCarsByNameHandler);
router.get('/cars/:id', getCarsByIdHandler);

//ROUTES AUTH0
router.get('/',(req, res) =>{
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
})

//ROUTES USER

//ROUTES ADMIN

module.exports = router;
