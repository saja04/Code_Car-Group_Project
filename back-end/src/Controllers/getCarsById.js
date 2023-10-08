const { Car } = require("../db");

const getCarById = async (req) => {
  const { id, precio } = req.body;

  const query = { where: { car_id: id, deleted: false } };

  if (precio) query.attributes = { exclude: [precio] };
  const findedCar = await Car.findOne(query);

  if (!findedCar) {
    return { msg: "Auto no encontrado!" };
  } else {
    return findedCar;
  }
};

module.exports = getCarById;
