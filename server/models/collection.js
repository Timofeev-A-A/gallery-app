const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CollectionSchema = new Schema(
    {
        name: { type: String, required: true },
        creator: { type: String, required: true },
        content: {type: [String], required: true }
    })

module.exports = mongoose.model('collections', CollectionSchema)