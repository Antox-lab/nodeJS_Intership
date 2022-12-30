const { default: mongoose } = require('mongoose');
const modelDB = require('./model');
const userModelDB = require('../Users/model');

const Tasks = modelDB;

const ITEMS_LIMIT = 5;

function getTasks(pageNumber) {
    return Tasks.find({})
        .sort({ estimatedTime: -1 })
        .skip(pageNumber * ITEMS_LIMIT)
        .limit(ITEMS_LIMIT);
}

function getTasksAll(id) {
    return userModelDB.aggregate(
        [
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(id),
                },
            },
            {
                $lookup: {
                    as: 'tasks',
                    from: 'tasks',
                    localField: '_id',
                    foreignField: 'assignee',
                },
            },
            {
                $unwind: {
                    path: '$tasks',
                    includeArrayIndex: 'string',
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $sort: {
                    'tasks.estimatedTime': -1,
                },
            },
            {
                $group: {
                    _id: {
                        $concat: [
                            '$firstName', ' ', '$lastName',
                        ],
                    },
                    tasks: {
                        $push: '$tasks',
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    tasks: 1,
                    totalEstimations: {
                        $sum: {
                            $sum: '$tasks.estimatedTime',
                        },
                    },
                    totalTasks: {
                        $size: '$tasks',
                    },
                },
            },
        ],
    );
}

function addTask(assignee, title, description, estimatedTime, createdBy) {
    const newTask = new Tasks({
        assignee,
        title,
        description,
        estimatedTime,
        createdBy,
    });

    newTask.save()
        .catch((err) => console.log('Save error: ', err));

    return newTask;
}

function updateTask(_id, estimatedTime) {
    const updatedTask = Tasks.findOneAndUpdate(
        {
            _id,
        },
        {
            estimatedTime,
        },
        {
            new: true,
        },
    );

    return updatedTask;
}

function deleteTask(_id) {
    return Tasks.find({ _id }).remove()
        .catch((err) => console.log('Deleting error: ', err));
}

function getDocumentsCount() {
    return Tasks.estimatedDocumentCount({});
}

module.exports = {
    getTasks,
    getTasksAll,
    addTask,
    updateTask,
    deleteTask,
    getDocumentsCount,
};
