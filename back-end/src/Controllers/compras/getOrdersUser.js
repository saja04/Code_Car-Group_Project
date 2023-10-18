

const {UserOrder} = require('../../db')


const getOrdersUser = async(id) => {
try {
    const findInDb = await UserOrder.findAll({where: {user_order: id}})
    if(findInDb){
        return findInDb
    }
    else return 'no se encontraron ordenes'
} catch (error) {
    return error
}
}

module.exports = getOrdersUser