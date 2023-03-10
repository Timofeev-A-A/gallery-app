const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ImageSchema = new Schema(
    {
        name: { type: String, required: true },
        desc: { type: String, required: true },
        path: { type: String, required: true }
    })

module.exports = mongoose.model('images', ImageSchema)