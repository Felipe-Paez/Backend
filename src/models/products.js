const { Schema, model } = require("mongoose")
const ProductSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        default: 0
    },
    style:{
        type:String,
        required:true,
        default:"non-category"
    },
    urlpfp:String,
    urlbanner: String,
    userId:{
        type:String,
        required:false
   }
},{
  timestamps: true
})

const ProductModel = model(
    "product",
    ProductSchema
)

module.exports = ProductModel