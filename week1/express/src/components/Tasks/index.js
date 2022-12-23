const TasksService = require('./service');

async function getTasks(req, res) {
    try {
        const task = await TasksService.getTasks(req.query.page);
        const totalTasks = await TasksService.getDocumentsCount();

        console.log(task);
        console.log(totalTasks);

        return res.status(200).json({
            code: 200,
            data: {
                tasks: task,
                totalTasks,
            },
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            details: null,
        });
    }
}

async function getTasksAll(req, res) {
    try {
        const task = await TasksService.getTasksAll(req.body.id);

        return res.status(200).json({
            code: 200,
            data: task,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            details: null,
        });
    }
}

async function addTask(req, res) {
    try {
        const task = await TasksService.addTask(
            req.body.assignee,
            req.body.title,
            req.body.description,
            req.body.estimatedTime,
            req.body.createdBy,
        );

        return res.status(200).json({
            data: task,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            details: null,
        });
    }
}

async function updateTask(req, res) {
    try {
        const task = await TasksService.updateTask(req.params.id, req.body.estimatedTime);

        return res.status(200).json({
            data: task,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            details: null,
        });
    }
}

async function deleteTask(req, res) {
    try {
        const task = await TasksService.deleteTask(req.body.id);

        return res.status(200).json({
            data: task,
        });
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            details: null,
        });
    }
}

module.exports = {
    getTasks,
    getTasksAll,
    addTask,
    updateTask,
    deleteTask,
};
