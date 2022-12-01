const { Router } = require('express');
const UsersComponent = require('./index');
const validationMethod = require('../../config/validationMiddleware');
const authorizationMethod = require('../../config/verifyMiddleware');
const schema = require('./shemas');

const router = Router();

router.get('/', UsersComponent.getUsers);

router.post('/add', validationMethod.validation(schema.add), UsersComponent.addUser);

router.post('/find', validationMethod.validation(schema.find), UsersComponent.findUser);

router.post('/findId', validationMethod.validation(schema.findId), UsersComponent.findUserId);

router.patch('/update', validationMethod.validation(schema.update), UsersComponent.updateUser);

router.delete('/delete', validationMethod.validation(schema.findId), UsersComponent.deleteUser);

router.post('/sign-in', validationMethod.validation(schema.findId), UsersComponent.authUser);

router.get('/account', authorizationMethod.autorization, UsersComponent.verifyUser);

module.exports = router;
