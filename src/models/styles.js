const {Schema, model} = require("mongoose")
const StylesSchema = new Schema({
    styles:[]
})

const StylesModel = model ("style", StylesSchema)

module.exports = StylesModel