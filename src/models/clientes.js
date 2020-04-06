const mongoose = require('mongoose');
const {Schema} = mongoose; 

const clienteSchema = new Schema({
    nombre: {type: String},
    apellidos: {type: String},
    telefono: {type: Number},
    calle: {type: String},
    numero: {type: Number},
    municipio:{type: String},
    date: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('cliente', clienteSchema)