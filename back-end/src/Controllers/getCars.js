const { Car } = require("../db");
const sequelize = require("sequelize");

const getCars = async (req) => {
  const { filter, order, pagination, precio } = req.body;
  const query = {
    where: { deleted: false}
  };

  if (pagination) {
    query.offset = pagination.offset;
    query.limit = pagination.limit;
  }
  if (order) {
    query.order = [[sequelize.literal(order.value), order.sequence]];
  }
  if (filter) {
    query.where = filter;
    query.where.deleted = false
  }
  if (precio) query.attributes = { exclude: [precio] };

  return await Car.findAll(query);
};

module.exports = getCars;
