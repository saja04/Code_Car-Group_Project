const { Router } = require("express");
const postCarsHandler = require("../Handlers/postCarsHandler");
const getCarsHandler = require("../Handlers/getCarsHandler");
const deleteCarsHandler = require("../Handlers/deleteCarsHandler");
const getCarsByNameHandler = require("../Handlers/getCarsByNameHandler");
const getCarsByIdHandler = require("../Handlers/getCarsByIdHandler");
const { requiresAuth } = require('express-openid-connect');
const { auth } = require('express-openid-connect');

const router = Router();

//ROUTES CARS
router.post("/carsPost", postCarsHandler);
router.post("/cars", getCarsHandler);
router.get("/carsDelete/:id", deleteCarsHandler);
router.get("/carsName/", getCarsByNameHandler);
router.get("/cars/:id", getCarsByIdHandler);

//ROUTES AUTH0
router.get("/", (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
// router.get("/auth0Problem", (req, res) => {
//   res.json({ msg: "error en autenticacion" });
// });
// router.get("/auth0", authHandler);
// router.post("/auth0/login", authHandler);

//ROUTES USER

//ROUTES ADMIN

module.exports = router;
