const UsersService = require('./service');

async function getUsers(req, res) {
    try {
        const user = await UsersService.getUsersList();

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function addUser(req, res) {
    try {
        const user = await UsersService.addUser(req.body.name, req.body.age);

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function findUser(req, res) {
    try {
        const user = await UsersService.findUserByName(req.body.name);

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function findUserId(req, res) {
    try {
        const user = await UsersService.findUserById(req.body.id);

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function updateUser(req, res) {
    try {
        const user = await UsersService.updateUser(req.body.id, req.body.name, req.body.age);

        return res.status(201).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function deleteUser(req, res) {
    try {
        const user = await UsersService.deleteUser(req.body.id);

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

async function createToken(req, res) {
    try {
        const user = await UsersService.createToken(req.body.id);

        return res.status(200).json({
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            details: null,
        });
    }
}

function verifyToken(req, res) {
    return res.status(200).json({
        message: `User with id ${req.user.id} is authorized!`,
    });
}

module.exports = {
    getUsers,
    addUser,
    findUser,
    findUserId,
    updateUser,
    deleteUser,
    createToken,
    verifyToken,
};
