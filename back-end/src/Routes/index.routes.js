const { Router } = require("express");
const postCarsHandler = require("../Handlers/postCarsHandler");
const getCarsHandler = require("../Handlers/getCarsHandler");
const deleteCarsHandler = require("../Handlers/deleteCarsHandler");
const getCarsByNameHandler = require("../Handlers/getCarsByNameHandler");
const getCarsByIdHandler = require("../Handlers/getCarsByIdHandler");
const passport = require("passport");
const postUserHandler = require("../Handlers/postUserHandler");
const express = require('express')

const router = Router();

//ROUTES CARS
router.post("/carsPost", postCarsHandler);
router.post("/cars", getCarsHandler);
router.get("/carsDelete/:id", deleteCarsHandler);
router.get("/carsName/", getCarsByNameHandler);
router.get("/cars/:id", getCarsByIdHandler);



//ROUTES USER
router.get("/login/succesful", (req, res) => {
  res.json({msg: "iniciaste sesion correctamente"});
});
router.get("/login/failure", (req, res) => {
  res.json({msg: "login fallido!"});
});

router.post(
  "/login/password",
  passport.authenticate("local", {
    successRedirect: "/login/succesful",
    failureRedirect: "/login/failure",
  })
);

router.post('/logout', function(req, res, next){
  req.logout(function(err){
    if(err) return next(err);
    res.status(201).json({msg: 'logout succesful'});
  })
});
router.post('/signup', postUserHandler)

router.get('/', async(req, res, next) => {
  if(req.isAuthenticated()) return next();
  res.redirect('/login/password')
}, (req, res) => {
  res.json({msg: 'user loged in', })
})


//ROUTES ADMIN

module.exports = router;
