const UserModel = require("../models/user")


async function registerUser(user) {
    return await UserModel.create(user)
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

module.exports = { registerUser,loginUser,getUsername,getEmail,getNumber }