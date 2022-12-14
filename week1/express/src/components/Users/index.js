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
        const user = UsersService.addUser(
            req.body.firstName,
            req.body.lastName,
            req.body.email,
            req.body.password,
        );

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
        const user = await UsersService.findUserByName(req.body.firstName);

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
        const user = await UsersService.updateUser(
            req.body.id,
            req.body.firstName,
            req.body.lastName,
            req.body.email,
            req.body.password,
        );

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

async function authUser(req, res) {
    try {
        const user = await UsersService.authUser(req.body.id);

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

function verifyUser(req, res) {
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
    authUser,
    verifyUser,
};
