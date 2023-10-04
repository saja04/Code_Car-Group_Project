const { Car } = require("../db");
const sequelize = require("sequelize");

const getCars = async (req) => {
  const { filter, order, pagination } = req.body;
  const query = {};
  if (pagination) {
    query.offset = pagination.offset;
    query.limit = pagination.limit;
  }
  if (order) {
    query.order = [[sequelize.literal(order.value), order.sequence]];
  }
  if (filter) query.where = filter;

  return await Car.findAll(query);
};

module.exports = getCars;
