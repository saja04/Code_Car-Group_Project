const { Car } = require("../db");

const orderCarsByPrice = async (precio) => {
  const allCars = await Car.findAll();
  if (precio === "menorMayor") {
    const sortedCars = allCars.sort((a, b) => {
      if (a.car_precio_usd < b.car_precio_usd) {
        return -1;
      } else if (a.car_precio_usd > b.car_precio_usd) {
        return 1;
      } else return 0;
    });
    return {msg:'cars ordenados de menor a mayor', cars: sortedCars};
  } else if (precio === "mayorMenor") {
    const sortedCars = allCars.sort((a, b) => {
      if (a.car_precio_usd > b.car_precio_usd) {
        return -1;
      } else if (a.car_precio_usd < b.car_precio_usd) {
        return 1;
      } else return 0;
    });
    return {msg:'cars ordenados de mayor a menor', cars: sortedCars};
  }
};

module.exports = orderCarsByPrice;
