const { Schema, default: mongoose } = require('mongoose')

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Author = mongoose.Model("Author", AuthorSchema)
module.exports = Author