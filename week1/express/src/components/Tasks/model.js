const { Schema, default: mongoose } = require('mongoose');
const connectDB = require('../../config/mongoConnection');

const schemaDB = new Schema({
    assignee: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    estimatedTime: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
});

module.exports = connectDB.model('Tasks', schemaDB);
