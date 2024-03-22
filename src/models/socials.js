const {Schema,model} = require("mongoose")

const SocialSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    social:{
        type:String,
        required:true
    }


})

const SocialModel = model( "social", SocialSchema)

module.exports = SocialModel