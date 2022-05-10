const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    class_an: {
        type: Number,
        required: true
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);
