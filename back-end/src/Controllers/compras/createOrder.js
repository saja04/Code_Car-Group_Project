const {UserOrder, Car} = require('../../db')



const createOrder = async(data) => {
    const fecha = new Date()
    const {userId, carId, medioDePago} = data

    if(medioDePago === 'efectivo'){
        const createInDb = await UserOrder.create({
            order_status: 'aPagar',
            order_date: fecha.toString(),
            car_order: carId,
            user_order: userId,
            medio_de_pago: medioDePago
        })
        console.log(createInDb);
        const searchInDb = await Car.findByPk(carId)
        if(searchInDb){
            searchInDb.deleted = true;
            searchInDb.save()
        }
        return createInDb
    }
}
module.exports = createOrder