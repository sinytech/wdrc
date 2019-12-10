const config = require('config')
const { File } = require('../db/models');

const addPath = file => ({ ...file.toJSON(), path: config.get('static.filePrefix') + file.filename })

const createFile = data => {
    return File.create(data);
};

const getFiles = userId => {
    return File.find({ user_id: userId, type: 'image' })
}

const deleteFileById = _id => {
    return File.remove({ _id })
}

const getFileById = _id => {
    return File.findOne({ _id })
}

module.exports = {
    getFiles,
    createFile,
    addPath,
    deleteFileById,
    getFileById
};