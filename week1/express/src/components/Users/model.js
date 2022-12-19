/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
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

schemaDB.pre(['save', 'findOneAndUpdate'], function (next) {
    if (this.password) {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    }
    next();
});

schemaDB.pre('findOneAndUpdate', function (next) {
    if (this._update.password) {
        this._update.password = bcrypt.hashSync(this._update.password, bcrypt.genSaltSync(10));
    }next();
});

module.exports = connectDB.model('Users', schemaDB);
