const { TasksServices } = require('../services')

const getTasks = (req, res) => {
    const { user } = req

    return TasksServices.getTasks(user._id)
        .then(result => res.status(200).json(result))
}

const createTask = (req, res) => {
    const { body, user } = req

    const data = { ...body, user_id: user._id }

    return TasksServices.createTask(data)
        .then(result => res.status(200).json(result))
}

const updateTask = (req, res) => {
    const { body, params } = req

    return TasksServices.findTaskById(params._id)
        .then(task => {
            task.title = body.title
            task.is_finished = body.is_finished
            return task.save()
        })
        .then(result => res.status(200).json(result))
}

const removeTask = (req, res) => {
    const { params } = req

    return TasksServices.deleteTaskById(params._id)
        .then(result => res.status(200).json(result))
}

module.exports = {
    createTask,
    updateTask,
    removeTask,
    getTasks
}
