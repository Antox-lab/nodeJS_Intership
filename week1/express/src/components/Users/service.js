const jwt = require('jsonwebtoken');

const usersList = [];

const TOKEN_SECRET = 'sdgasdkjgsdjcndsafykgcsdayhfkgdhasf';

function getUsersList() {
    return usersList;
}

function addUser(userName, userAge) {
    const newUser = {
        id: Date.now(),
        name: userName,
        age: userAge,
    };

    usersList.push(newUser);

    return newUser;
}

function findUserByName(userName) {
    return usersList.filter((item) => item.name === userName);
}

function findUserById(userId) {
    return usersList.filter((item) => item.id.toString() === userId);
}

function updateUser(userId, userName, userAge) {
    usersList.forEach((item) => {
        if (item.id.toString() === userId) {
            // eslint-disable-next-line no-param-reassign
            item.name = userName;

            // eslint-disable-next-line no-param-reassign
            item.age = userAge;
        }
    });

    return usersList;
}

function deleteUser(userId) {
    const userIndex = usersList.findIndex((item) => item.id.toString() === userId);

    if (userIndex > -1) {
        usersList.splice(userIndex, 1);
    }

    return usersList;
}

function authUser(userId) {
    const isUser = usersList.find((item) => item.id.toString() === userId);

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
    TOKEN_SECRET,
};
