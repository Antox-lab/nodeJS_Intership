const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

let usersList = ['MAX', 'ANTON', 'DU', 'ICH'];

function addUser(userName) {
    usersList.push(userName);
    console.log(`+ User "${userName}" is added!`);
    console.log(usersList);
}

function findUser(userName) {
    console.log(`${usersList.includes(userName) ? ' + Is ' : ' - Is NOT '}user "${userName}" found! `);
}

function updateUser(currentUserName, newUserName) {
    if (usersList.includes(currentUserName)) {
        usersList[getUserIndex(currentUserName)] = newUserName;
        console.log(`+ User "${currentUserName}" is updated!`);
    } else {
        console.log(`- User "${currentUserName}" is not found!`);
    }
    console.log(usersList);
}

function deleteUser(userName) {
    if (usersList.includes(userName)) {
        usersList.splice(getUserIndex(userName), 1);
        console.log(`+ User "${userName}" is deleted!`);
    } else {
        console.log(`- User "${userName}" is not found!`);
    }
    console.log(usersList);
}

function getUserIndex(userName) {
    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i] === userName) {
            return i;
        }
    }
    return usersList.length;
}

function getReadLine(message, func, update) {
    console.log(message);
    const rl = readline.createInterface({ input, output });
    rl.question('User name is: ', (userName) => {
        if (update) {
            rl.question('New name is: ', (newName) => {
                func(userName, newName);
                rl.close();
            })
        } else {
            func(userName);
            rl.close();
        }
    });

}

module.exports = {
    addUser,
    findUser,
    updateUser,
    deleteUser,
    getReadLine
}