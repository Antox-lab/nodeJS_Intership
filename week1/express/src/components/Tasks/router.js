const { Router } = require('express');
const TasksComponent = require('./index');
const validationMethod = require('../../config/validationMiddleware');
const authorizationMethod = require('../../config/verifyMiddleware');
const schema = require('./schema');

const router = Router();

router.get('/', TasksComponent.getTasks);

router.get('/all', TasksComponent.getTasksAll);

router.post('/', validationMethod.validation(schema.add), authorizationMethod.autorization, TasksComponent.addTask);

router.patch('/:id', validationMethod.validation(schema.update), authorizationMethod.autorization, TasksComponent.updateTask);

router.delete('/delete', validationMethod.validation(schema.delete), authorizationMethod.autorization, TasksComponent.deleteTask);

module.exports = router;
