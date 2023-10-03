const auth = require('../Controllers/auth0');



const authHandler = async(req, res) => {
    const { credentials } = req.body;
    try {
        if(credentials){
            response = await auth(credentials);
            res.status(210).json(response)
        } else{
            response = await auth(),
            res.status(210).json(response)
        }
        
    } catch (error) {
        res.status(410).send('error')
    }
}

module.exports = authHandler;