const mongoose = require('mongoose');
const {Schema} = mongoose; 

const almacenSchema = new Schema({
    nombre: {type: String},
    stock: {type: Number},
    costo: {type:Number},
    date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('almacen', almacenSchema)