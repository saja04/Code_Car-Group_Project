const {ReviewModel} = require('../db');

const allReviews = async () => {
  return await ReviewModel.findAll({
  });
};

module.exports = {
  allReviews,
};
