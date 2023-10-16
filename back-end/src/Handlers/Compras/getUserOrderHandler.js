
const {User} = require('../../db')
const getOrdersUser = require('../../Controllers/compras/getOrdersUser')

const getUserOrderHandler = async(req, res) => {

    try {
        const { email } = req.body
        const findUser = await User.findOne({where: {user_email: email}})
        console.log(findUser);
        const response = await getOrdersUser(findUser.dataValues.user_id)
        return res.status(201).json(response)
        } catch (error) {
        res.status(400).send(error)
    }

}

module.exports = getUserOrderHandler