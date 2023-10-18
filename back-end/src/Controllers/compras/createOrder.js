const { UserOrder, Car } = require("../../db");

const createOrder = async (data) => {
  const fecha = new Date();
  const { name, price, userId, carId, carModelo, carMarca, userEmail } = data;

  if (medioDePago === "efectivo") {
    const createInDb = await UserOrder.create({
      order_status: "aPagar",
      order_date: fecha.toString(),
      car_order: carId,
      user_order: userId,
      medio_de_pago: "efectivo",
      car_modelo: carModelo,
      car_marca: carMarca,
      car_precio_ars: price,
      user_email: userEmail,
    });
    console.log(createInDb);
    const searchInDb = await Car.findByPk(carId);
    if (searchInDb) {
      searchInDb.deleted = true;
      searchInDb.save();
    }
    return createInDb;
  }
};
module.exports = createOrder;
