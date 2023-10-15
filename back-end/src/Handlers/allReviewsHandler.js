const allReviews = require("../Controllers/allReviews");

const allReviewsHandler = async (req, res) => {
  try {
    const response = await allReviews();
    return res.status(201).json(response);
    
  } catch (error) {
    console.error(error);
    res.status(401).json({
      mensaje: "no se han podido traer las Reviews, verifica la db y servidor",
    });
  }
};

module.exports = allReviewsHandler;
