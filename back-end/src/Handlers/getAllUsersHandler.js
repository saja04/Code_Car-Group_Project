const axios = require('axios')

const getAllUsersHandler = async(req, res) => {

    try {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://dev-mp4haipy0yoq4dta.us.auth0.com/api/v2/users',
            headers: { 
              'Accept': 'application/json'
            }
          };
        const response = await axios.request(config)
        res.json(response.data)
    } catch (error) {
        res.send(error.message)
    }

}
module.exports = getAllUsersHandler