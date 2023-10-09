const Review = require("../db.js");
const reviewSchema = require("../db.js");
const usersSchema = require("../db.js");
const Users = require("../db.js");
const Cars = require("../db.js");
const carsSchema = require("../db.js");

const postReview = async (req, res) => {
  const reviewR = reviewSchema(req.body);

  const newReview = await new Review({
    email: reviewR.email,
    idCar: reviewR.idCar,
    comment: reviewR.comment,
  });
  const saveReview = await newReview.save();
  const cars = await Cars.find({ _id: reviewR.idCar });
  let review = cars[0].review;
  review.push(newReview);
  await carsSchema.updateOne({ _id: reviewR.idCar }, { review });
  const users = await Users.find({ email: reviewR.email });
  review = users[0].review;
  review.push(newReview);
  await usersSchema.updateOne({ email: reviewR.email }, { review });
  res.status(200).json(saveReview);
};

const deleteReview = async (req, res) => {
  console.log(req.params)
  const comeet = await reviewSchema.find({ _id: req.params.id });
  const borado = await reviewSchema.deleteOne({ _id: req.params.id });
  const cars = await Cars.find({ _id: comeet[0].idCar });
  let review = cars[0].review;
  review = review.filter(
    (e) => JSON.stringify(e._id) !== JSON.stringify(req.params.id)
  );
  await carsSchema.updateOne({ _id: comeet[0].idCar }, { review });
  const users = await Users.find({ email: comeet[0].email });
  review = users[0].review;
  review = review.filter(
    (e) => JSON.stringify(e._id) !== JSON.stringify(req.params.id)
  );
  await usersSchema.updateOne({ email: comeet[0].email }, { review });
  res.status(200).json(borado);
};


const getReview = async (req, res) => {
  const review = await reviewSchema.find();
  res.status(200).json(review);
};

const postRequest = async (req, res) => {
  const { id } = req.params
  const { request, email, idCar } = req.body;

  let review = await reviewSchema.updateOne({ _id: id }, { request });

  let carId = await carsSchema.find({ _id: idCar })
  carId = carId[0].review;
  review = carId.map(e => JSON.stringify(e._id) === JSON.stringify(id) ? (e.request = request) && e : e);
  console.log(review)
  await carsSchema.updateOne({ _id: idCar }, { review });

  let userId = await usersSchema.find({ email: email });
  userId = userId[0].review;
  review = userId.map(e => JSON.stringify(e._id) === JSON.stringify(id) ? (e.request = request) && e : e);
  await usersSchema.updateOne({ email: email }, { review });
  const rev = await reviewSchema.updateOne({ _id: id }, { status: "answered" });
  res.status(200).send("OK");
};

module.exports = { postReview, getReview, deleteReview, postRequest };
