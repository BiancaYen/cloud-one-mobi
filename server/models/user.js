const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    ip: { type: String },
    name: { type: String },
    surname: { type: String },
    profileImage: { type: String }
});

mongoose.model('user', UserSchema);
