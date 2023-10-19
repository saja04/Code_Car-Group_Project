const { UserOrder } = require("../../db");

const changeOrderStatus = async (req, res) => {
    const {orderId, status} = req.body
  try {
    const searchInDb = await UserOrder.findByPk(orderId);
    console.log(searchInDb);

    if(status === 'Completa'){
        searchInDb.order_status = 'Completa'
        searchInDb.save()
    }
    else if(status === 'Cancelada'){
        searchInDb.order_status = 'Cancelada'
        searchInDb.save()
    }
    res.status(201).send('orden enviada con exito')
  } catch (error) {
    console.log(error);
  }
};

module.exports = changeOrderStatus;
