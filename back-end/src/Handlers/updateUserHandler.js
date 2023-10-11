const axios = require('axios')


const updateUserHandler = async(req, res) => {
    try {
        const user = req.auth.payload
        const token = req.auth.token
        console.log(token);
        if(user.permissions.includes('read:users')){
            res.send('este usuario tiene los permisos de edicion de usuarios')

            const response = await axios('https://dev-mp4haipy0yoq4dta.us.auth0.com/api/v2/users',{
                headers: {
                   'Accept': 'application/json'
                }
            })
            console.log(response.data);

        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = updateUserHandler;