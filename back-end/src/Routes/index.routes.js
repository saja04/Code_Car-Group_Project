const { Router } = require("express");
const postCarsHandler = require("../Handlers/postCarsHandler");
const getCarsHandler = require("../Handlers/getCarsHandler");
const deleteCarsHandler = require("../Handlers/deleteCarsHandler");
const getCarsByNameHandler = require("../Handlers/getCarsByNameHandler");
const getCarsByIdHandler = require("../Handlers/getCarsByIdHandler");
const passport = require("passport");
const postUserHandler = require("../Handlers/postUserHandler");

const router = Router();

//ROUTES CARS
router.post("/carsPost", postCarsHandler);
router.post("/cars", getCarsHandler);
router.get("/carsDelete/:id", deleteCarsHandler);
router.get("/carsName/", getCarsByNameHandler);
router.get("/cars/:id", getCarsByIdHandler);

//ROUTES AUTH0
router.get("/login/succesful", (req, res) => {
  res.send("iniciaste sesion correctamente");
});
router.get("/login/failure", (req, res) => {
  res.send("login fallido!");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/login/succesful",
    failureRedirect: "/login/failure",
  })
);

router.post('/logout', function(req, res, next){
  req.logout(function(err){
    if(err) return next(err);
    res.redirect('/');
  })
});
router.post('/signup', postUserHandler)
// router.get("/auth0Problem", (req, res) => {
//   res.json({ msg: "error en autenticacion" });
// });
// router.get("/auth0", authHandler);
// router.post("/auth0/login", authHandler);

//ROUTES USER

//ROUTES ADMIN

module.exports = router;
