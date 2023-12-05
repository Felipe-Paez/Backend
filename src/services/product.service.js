const ProductModel = require("../models/products")

async function getAllProducts() {

    return await ProductModel.find()

}

async function removeOneProductById(id) {
    return await ProductModel.findOneAndRemove({ _id: id })
}

async function registerProduct(product) {
    return await ProductModel.create(product)
}

async function getOneProductByName(name) {
    return await ProductModel.findOne({name:name})
}
async function updateOneProductById(id, update) {
    return await ProductModel.findOneAndUpdate({_id: id},update,{new: true})
}


module.exports = {
    registerProduct,
    getOneProductByName,
    getAllProducts,
    removeOneProductById,
    updateOneProductById
}