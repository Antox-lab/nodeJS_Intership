const userList = require('../../data/index');

function addUser() {
    userList.getReadLine('--- ADDING USER ---', userList.addUser);

    return {
        message: 'User is added!',
    };
}

function findUser() {
    userList.getReadLine('--- FINDING USER ---', userList.findUser);

    return {
        message: 'User is finded!',
    };
}

function updateUser() {
    userList.getReadLine('--- UPDATING USER ---', userList.updateUser, true);

    return {
        message: 'User is updated!',
    };
}

function deleteUser() {
    userList.getReadLine('--- DELETING USER ---', userList.deleteUser);

    return {
        message: 'User is deleted!',
    };
}

module.exports = {
    addUser,
    findUser,
    updateUser,
    deleteUser,
};
