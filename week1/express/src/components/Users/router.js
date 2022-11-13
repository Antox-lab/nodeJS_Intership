const { Router } = require('express');
const UsersComponent = require('./index');

const router = Router();

router.get('/', UsersComponent.addUser);

router.get('/find', UsersComponent.findUser);

router.get('/update', UsersComponent.updateUser);

router.get('/delete', UsersComponent.deleteUser);

module.exports = router;