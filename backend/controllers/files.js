const { FilesServices } = require('../services')

const uploadFile = (req, res) => {
    const { file, user } = req
    const { filename, originalname, size, mimetype } = file

    const data = { filename, originalname, size, mimetype, user_id: user._id }

    return FilesServices.createFile(data)
        .then(result => {
            const response = FilesServices.addPath(result)
            return res.status(200).send(response)
        })
}

const getFiles = (req, res) => {
    const { user } = req

    return FilesServices.getFiles(user._id)
        .then(result => {
            const response = result.map(FilesServices.addPath)
            return res.status(200).send(response)
        })
}

const deleteFile = (req, res) => {
    const { _id } = req.params

    return FilesServices.deleteFileById(_id)
        .then(result => res.status(200).json(result))
}

module.exports = {
    uploadFile,
    getFiles,
    deleteFile
}
