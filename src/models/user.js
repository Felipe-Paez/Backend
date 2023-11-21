const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    number:{
        type:Number,
        required: true,
        unique: true
    },
    role:{
        type: String,
        required: true,
        default: "registered"
    }
},{
    timestamps: true
  })

const UserModel = model ("user", UserSchema)

module.exports = UserModel