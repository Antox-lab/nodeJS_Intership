const jwt = require('jsonwebtoken');
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

function findUserById(_id) {
    return User.find({ _id });
}

function updateUser(_id, firstName, lastName, email, password) {
    const updatedUser = User.findOneAndUpdate(
        {
            _id,
        },
        {
            firstName,
            lastName,
            email,
            password,
        },
        {
            new: true,
        },
    );

    return updatedUser;
}

function deleteUser(_id) {
    return User.find({ _id }).remove()
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
