const mongoose = require('mongoose');

const PrinterSchema = new mongoose.Schema({
    ip: { type: String },
    active: { type: Boolean },
    name: { type: String },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
});

PrinterSchema.statics.findUsers = function findUsers(id) {
    return this.findById(id)
        .populate('users')
        .then(printer => printer.users);
};

mongoose.model('printer', PrinterSchema);
