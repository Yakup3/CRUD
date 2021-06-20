const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('Model', modelSchema);