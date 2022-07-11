const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('reviews', {
    author: {
        type: ObjectId,
        required: true,
        ref: 'users'
    },
    date: {
        type: Date,
        required: true,
        ref: 'users',
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    house: {
        type: ObjectId,
        required: true,
        ref: 'houses'
    },
})