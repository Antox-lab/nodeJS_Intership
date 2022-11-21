const { Router } = require('express');
const UsersComponent = require('./index');
const middlewareMethods = require('./middleware');
const schema = require('./shemas');

const router = Router();

router.get('/', UsersComponent.getUsers);

router.post('/add', middlewareMethods.validation(schema.add), UsersComponent.addUser);

router.post('/find', middlewareMethods.validation(schema.find), UsersComponent.findUser);

router.post('/findId', middlewareMethods.validation(schema.findId), UsersComponent.findUserId);

router.patch('/update', middlewareMethods.validation(schema.update), UsersComponent.updateUser);

router.delete('/delete', middlewareMethods.validation(schema.findId), UsersComponent.deleteUser);

router.post('/sign-in', middlewareMethods.validation(schema.findId), UsersComponent.authUser);

router.get('/account', middlewareMethods.autorization, UsersComponent.verifyUser);

module.exports = router;
