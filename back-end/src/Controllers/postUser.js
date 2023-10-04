const crypto = require('crypto');
const { User } = require('../db')


const postUser = async(name, email, password) => {
    const salt = crypto.randomBytes(16);
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 350, 32, 'sha256');
    // console.log(name, email, password);

    const newUser = await User.findOrCreate({
        where: {
            user_name: name,
            user_email: email,
            hashed_password: hashedPassword,
            salt: salt
        }
    });
    console.log(newUser.User);
    return newUser.dataValues;
}

module.exports = postUser;