const { Car } = require("../db");
const sequelize = require("sequelize");

const getCars = async (req) => {
  const { filter, order, pagination, precio } = req.body;
  const query = {
    where: { deleted: false }, // Agregar la condición para autos no borrados
  };

  if (pagination) {
    query.offset = pagination.offset;
    query.limit = pagination.limit;
  }
  if (order) {
    query.order = [[sequelize.literal(order.value), order.sequence]];
  }
  if (filter) query.where['filter'] =  filter;
  if (precio) query.attributes = { exclude: [precio] };

  return await Car.findAll(query);
};

module.exports = getCars;
