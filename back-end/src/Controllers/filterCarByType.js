const { Car } = require("../db");

const getCarsByType = async (tipo) => {
    const filteredCars = await Car.findAll({
      where: {
        car_tipo_de_auto: tipo,
      },
    });
    return(filteredCars);
};

module.exports = {
  getCarsByType,
};
