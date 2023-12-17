const {Schema, model} = require("mongoose")
const GallerySchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
)

const GalleryModel = model(
    "gallery",
    GallerySchema
)

module.exports = GalleryModel