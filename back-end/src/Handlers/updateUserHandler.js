const axios = require('axios')


const updateUserHandler = async(req, res) => {
    try {
        const body = req.body;
        const {id} = body
         
        const data = JSON.stringify(body.data)

        console.log(data);

        const config = {
            method:'patch',
            maxBodyLength: Infinity,
            url: `https://dev-mp4haipy0yoq4dta.us.auth0.com/user/${id}`,
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            data: data
        }

        const response = await axios.request(config)


        console.log(response);

        res.json(response)




    } catch (error) {
        console.log(error.message);
    }
}

module.exports = updateUserHandler;