const axios = require('axios');
const getAllUsers = require('../Controllers/getAllUsers')

const getAllUsersHandler = async(req, res) => {

    try {
        const response = await getAllUsers();
        console.log(response);
        res.status(200).json(response)

    } catch (error) {
        res.send(error.message)
    }

}
module.exports = getAllUsersHandler