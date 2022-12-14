const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const modelDB = require('./model');

const TOKEN_SECRET = process.env.TOKEN;

const User = modelDB;

function getUsersList() {
    return User.find({});
}

function addUser(firstName, lastName, email, password) {
    const user = new User({
        firstName,
        lastName,
        email,
        password,
    });

    user.save()
        .catch((err) => console.log('Save error: ', err));

    return user;
}

function findUserByName(firstName) {
    return User.find({ firstName });
}

function findUserById(userId) {
    return User.find({ _id: userId });
}

function updateUser(userId, firstName, lastName, email, password) {
    const updatedUser = User.findByIdAndUpdate(
        {
            _id: userId,
        },
        {
            firstName,
            lastName,
            email,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
        },
        {
            new: true,
        },
    );

    return updatedUser;
}

function deleteUser(userId) {
    return User.find({ _id: userId }).remove()
        .catch((err) => console.log('Deleting error: ', err));
}

function authUser(userId) {
    const isUser = User.find({ _id: userId });

    if (isUser) {
        return jwt.sign(
            {
                id: userId,
            },
            TOKEN_SECRET,
        );
    }

    return {
        message: `For id:${userId} user is not found`,
    };
}

module.exports = {
    getUsersList,
    addUser,
    findUserByName,
    findUserById,
    updateUser,
    deleteUser,
    authUser,
};
