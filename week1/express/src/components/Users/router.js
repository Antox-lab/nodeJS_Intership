const { Router } = require('express');
const UsersComponent = require('./index');
const middlewareMethods = require('./middleware');
const schema = require('./shemas');

const router = Router();

router.get('/', UsersComponent.getUsers);

router.post('/add', middlewareMethods.middleware(schema.add), UsersComponent.addUser);

router.post('/find', middlewareMethods.middleware(schema.find), UsersComponent.findUser);

router.post('/findId', middlewareMethods.middleware(schema.findId), UsersComponent.findUserId);

router.patch('/update', middlewareMethods.middleware(schema.update), UsersComponent.updateUser);

router.delete('/delete', middlewareMethods.middleware(schema.findId), UsersComponent.deleteUser);

router.post('/sign-in', UsersComponent.createToken);

router.get('/account', middlewareMethods.autorization, UsersComponent.verifyToken);

module.exports = router;
