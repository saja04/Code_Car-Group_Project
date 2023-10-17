const deleteStock = require("../Controllers/deleteStock")

const deleteStockHandler = async(req, res) =>{
	const { carId, cantidad } = req.body;
  
	try {
	  const resultado = await deleteStock(carId, cantidad);
	  if (resultado === null) {
		res.status(404).json({ mensaje: 'El auto no se encuentra en la base de datos.' });
	  } else if (resultado === false) {
		res.status(400).json({ mensaje: 'No hay suficiente stock para eliminar.' });
	  } else {
		res.status(200).json({ mensaje: `${cantidad} unidades de ${car.car_marca} ${car.car_modelo} eliminadas del stock.` });
	  }
	} catch (error) {
	  res.status(500).json({ mensaje: 'Error al eliminar stock.' });
	}
}

module.exports = deleteStockHandler;