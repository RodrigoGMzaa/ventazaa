const mongoose = require('mongoose');
const {Schema} = mongoose; 

const categorySchema = new Schema({
    category: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('category', categorySchema)