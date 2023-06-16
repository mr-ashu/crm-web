const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    position: String,
    active: { type: Boolean, default: true },
});


const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee