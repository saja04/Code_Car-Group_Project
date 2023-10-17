const {UserOrder} = require('../../db')



const createOrder = async(data) => {
    const fecha = new Date()
    const {userId, carId, medioDePago} = data

    if(medioDePago === 'efectivo'){
        const createInDb = await UserOrder.create({
            order_status: 'listoRetirar',
            order_date: fecha.toString(),
            car_order: carId,
            user_order: userId,
            medio_de_pago: medioDePago
        })
        console.log(createInDb);
        return createInDb
    }
    else{
        const createInDb = await UserOrder.create({
            order_status: 'pagado',
            order_date: fecha.toString(),
            car_order: carId,
            user_order: userId,
            medio_de_pago: medioDePago
        })
        return createInDb
    }
    

    

}
module.exports = createOrder