const { Car } = require("../db");

const getCarsByName = async (req, res) => {
  try {
    const { modelo } = req.query;
    if (modelo) {
        let slicedString = ''
      const allCars = await Car.findAll();
      if (modelo.length === 2) {
        slicedString = modelo.slice(0, 2);
      } else if (modelo.length === 3) {
        slicedString = modelo.slice(0, 3);
      } else if (modelo.length >= 4) {
        slicedString = modelo.slice(0, 4);
      }
      let primerLetraMayus = slicedString.charAt(0).toUpperCase();
      let restoString = slicedString.slice(1);
      const searchString = primerLetraMayus + restoString;
      console.log(searchString);



      let findedCars = [];
      const searchCars = allCars.map((car) => {
        if (
          car.dataValues.car_modelo.length === 2 &&
          car.dataValues.car_modelo[0] + car.dataValues.car_modelo[1] === searchString
        ) {
          console.log(car.dataValues);
          findedCars.push(car.dataValues);
        } else if (
          car.dataValues.car_modelo.length === 3 &&
          car.dataValues.car_modelo[0] +
            car.dataValues.car_modelo[1] +
            car.dataValues.car_modelo[2] ===
            searchString
        ) { //HOLA
          console.log(car.dataValues);
          findedCars.push(car.dataValues);
        } else if (
          car.dataValues.car_modelo.length >= 4 &&
          car.dataValues.car_modelo[0] +
            car.dataValues.car_modelo[1] +
            car.dataValues.car_modelo[2] +
            car.dataValues.car_modelo[3] ===
            searchString
        ) {
          console.log(car.dataValues);
          findedCars.push(car.dataValues);
        }
      });
      if (!findedCars[0]) {
        res.status(401).json({ msg: "car not found" });
      }
      else if(findedCars[0]){
        res.status(201).json({ msg: "car/s founded", cars: findedCars });
      }
    } else {
      res.status(402).json({ msg: "please enter model" });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = getCarsByName;
