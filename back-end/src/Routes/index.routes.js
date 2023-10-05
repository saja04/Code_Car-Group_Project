const { Router } = require("express");
const postCarsHandler = require("../Handlers/postCarsHandler");
const getCarsHandler = require("../Handlers/getCarsHandler");
const deleteCarsHandler = require("../Handlers/deleteCarsHandler");
const getCarsByNameHandler = require("../Handlers/getCarsByNameHandler");
const getCarsByIdHandler = require("../Handlers/getCarsByIdHandler");
const getAllUsersHandler = require("../Handlers/getAllUsersHandler")
const postUserHandler = require("../Handlers/postUserHandler")
const buyCarHandler = require("../Handlers/buyCarHandler")
const passport = require("passport")

const router = Router();

const checkAuthenticated = async (req, res, next) => {
    if(req.isAuthenticated()){
      return next()
    }
    res.status(499).json({msg: 'usuario no logeado, por favor log in o sign in'})
};

//ROUTES CARS
router.post("/carsPost", checkAuthenticated, postCarsHandler);
router.post("/cars", getCarsHandler);
router.post("/users", getAllUsersHandler);
router.post("/users", getAllUsersHandler)
router.post("/pedido/", checkAuthenticated, buyCarHandler)
router.get("/carsDelete/:id", checkAuthenticated, deleteCarsHandler);
router.get("/carsName/", getCarsByNameHandler);
router.get("/cars/:id", getCarsByIdHandler);

//ROUTES USER
router.post("/login/succesful", (req, res) => {
  res.json({ msg: "iniciaste sesion correctamente" });
});
router.post("/login/failure", (req, res) => {
  res.json({ msg: "login fallido!" });
});

router.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/login/succesful",
    failureRedirect: "/login/failure",
  })
);

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
    return res.status(201).json({ msg: "logout succesful" });
  });
});
router.post("/signup", postUserHandler);

router.get("/", checkAuthenticated, (req, res) => {
  res.json({msg: 'el usuairo está logeado'})
});

//ROUTES ADMIN

module.exports = router;
