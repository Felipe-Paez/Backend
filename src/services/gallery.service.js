const GalleryModel = require("../models/gallery")

async function getAllImagesByName(name) {
    return await GalleryModel.find({name:name})
}

async function removeOneImageById(id) {
    return await GalleryModel.findOneAndRemove({ _id: id })
}

async function registerImage(image) {
    return await GalleryModel.create(image)
}

module.exports = {
    registerImage,
    getAllImagesByName,
    removeOneImageById
}