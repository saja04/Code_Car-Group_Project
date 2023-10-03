

const auth = async(credentials) => {
    if(credentials){
        return {msg:'SOY EL LOGIN Y RECIBI CREDENCIALES: ', credentials}
    }
    return {msg: 'hola, esto es el login del auth'}
}


module.exports = auth