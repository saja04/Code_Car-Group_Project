const  addStock  = require('../Controllers/carStock');

 const addStockHandler = async(req, res) =>{
  const { carId, cantidad } = req.body;

  try {
    const car = await addStock(carId, cantidad);
    if (car === null) {
      res.status(404).json({ mensaje: 'El auto no se encuentra en la base de datos.' });
    } else {
      res.status(200).json({ mensaje: `${cantidad} unidades de ${car.car_marca} ${car.car_modelo} agregadas al stock.` });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al agregar stock.' });
  }
}


module.exports = addStockHandler;