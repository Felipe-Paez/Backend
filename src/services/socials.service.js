const SocialModel = require("../models/socials")

async function getAllSocialsByName(name) {
    return await SocialModel.find({name:name})
}

async function removeOneSocialById(id) {
    return await SocialModel.findOneAndRemove({ _id: id })
}

async function registerSocial(social) {
    return await SocialModel.create(social)
}

module.exports = {
    registerSocial,
    getAllSocialsByName,
    removeOneSocialById
}