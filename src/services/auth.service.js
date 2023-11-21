const UserModel = require("../models/user")


async function registerUser(user) {
    return await UserModel.create(user)
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

module.exports = { registerUser,loginUser,getUsername,getEmail,getNumber }