const { Task } = require('../db/models');

const createTask = data => {
    return Task.create(data);
};

const getTasks = userId => {
    return Task.find({ user_id: userId })
}

const findTaskById = _id => {
    return Task.findOne({ _id });
};

const deleteTaskById = _id => {
    return Task.remove({ _id });
};

module.exports = {
    getTasks,
    createTask,
    findTaskById,
    deleteTaskById
};