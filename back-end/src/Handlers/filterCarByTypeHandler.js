const { getCarsByType } = require('../Controllers/filterCarByType');
const {Car} = require("../db")

const filterCarByTypeHandler = async (req, res) => {
  try {
    const { tipo } = req.query;
	const allCars = await Car.findAll({

	})
	const AllTipos = [];
	const SearchTipos = allCars.map(car => {
		if (car.car_tipo_de_auto && !AllTipos.includes(car.car_tipo_de_auto)){
			return AllTipos.push(car.car_tipo_de_auto)
		}else null
	})
	if(!AllTipos.includes(tipo)){
		return res.status(400).json({ message: `Tipo de auto no valido, los tipos son: ${AllTipos}`, 	})
	}
	// if (!tipo || !['Sedan', 'SUV', 'Hatchback', 'Pick-up'].includes(tipo)) {
	// 	return res.status(400).json({ message: 'Tipo de auto no válido' });
	// }
    const filteredCars = await getCarsByType(tipo);
    res.status(200).json(filteredCars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = 
	filterCarByTypeHandler
;
