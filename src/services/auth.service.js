const { genSaltSync, hashSync } = require( 'bcrypt' );

const UserModel = require("../models/user")


function registerUser ( newUser ) {
    // Si no existe. Creamos el usuario
    const dbUser = new UserModel( newUser );

    // Encriptar la contrasenia
    const salt = genSaltSync();                 
    dbUser.password = hashSync( newUser.password, salt );

    dbUser.save();
}

async function getUsername(user){
    const data = UserModel.find({user:user.identifier}, {user: 1})
    return await data
}

async function getEmail(user){
    const email = UserModel.find({email:user.identifier}, {email: 1})
    return await email
}

async function getNumber(user){
    const number = UserModel.find({number:user.identifier}, {number: 1})
    return await number
}


async function loginUser(user) {
    const email =  await getEmail(user)
    if(isNaN(user.identifier)){
        return await UserModel.findOne({email:user.identifier})
    }else{
      return await UserModel.findOne({number:user.identifier})
    }
  

}

async function findUserByEmail( email ) {

    return await UserModel.findOne({ email }, {
        // Restricciones: No retornar las siguientes propiedades y sus valores
        createdAt: 0,
        updatedAt: 0,
        __v: 0
    });         // Equivale a: UserModel.find({ username: username });  
}

module.exports = { registerUser,loginUser,getUsername,getEmail,getNumber, findUserByEmail, }