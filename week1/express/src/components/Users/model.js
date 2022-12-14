const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const connectDB = require('../../config/mongoConnection');

const schemaDB = new Schema({
    firstName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
    },
    lastName: String,
    email: {
        type: String,
        required: true,
        index: {
            unique: true,
        },
    },
    password: {
        type: String,
        required: true,
    },
});

// eslint-disable-next-line func-names
schemaDB.pre('save', function (next) {
    if (this.password) {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    }
    next();
});

module.exports = connectDB.model('Users', schemaDB);
