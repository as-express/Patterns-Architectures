const mongoose = require('mongoose')

const laptopSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    cpu: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
})

const Laptop = mongoose.model('Laptop', laptopSchema)
module.exports = Laptop
