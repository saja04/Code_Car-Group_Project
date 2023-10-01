const { Car } = require('../db')

const filterCarByCondition = async(condicion) => {
    const allCars = await Car.findAll()
    if(condicion === 'Usado'){
        const filteredCarsUsado = allCars.map((car) => {
            if(car.dataValues.car_condicion === condicion){
                return car;
            } else return null
        }).filter((element) => element !== null)
        return {msg:'cars encontrados!', cars: filteredCarsUsado};
    }
    else if(condicion === '0km'){
        const filteredCarsNuevo = allCars.map((car) => {
            if(car.dataValues.car_condicion === condicion){
                return car.dataValues
            } else return null
        }).filter((element) => element !== null)
        return {msg:'cars encontrados!', cars: filteredCarsNuevo};
    }
}


module.exports = filterCarByCondition;