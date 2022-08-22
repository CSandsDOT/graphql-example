const mongoose = require ('mongoose')

const itemSchema = mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    tags: [{ type: String }]
})
module.exports = mongoose.model("TaggedItem", itemSchema)