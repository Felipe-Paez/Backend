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
    const data = UserModel.find({username:user.identifier}, {username: 1})
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
    const username = await getUsername(user)
    const email =  await getEmail(user)
    if(isNaN(user.identifier)){
        if(user.identifier == username[0].username){
        return await UserModel.findOne({username:user.identifier})
        }
        else if(user.identifier == email[0].email){
            console.log(3)
        }
    }else{
      return await UserModel.findOne({number:user.identifier})
    }
  

}

async function findUserByUsername( username ) {

    return await UserModel.findOne({ username }, {
        // Restricciones: No retornar las siguientes propiedades y sus valores
        createdAt: 0,
        updatedAt: 0,
        __v: 0
    });         // Equivale a: UserModel.find({ username: username });  
}

module.exports = { registerUser,loginUser,getUsername,getEmail,getNumber, findUserByUsername, }