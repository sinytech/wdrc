const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: 'files/',
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

const { uploadFile, getFiles, deleteFile } = require('../controllers/files')

router.post('/', upload.single('file'), uploadFile);
router.get('/', getFiles);
router.delete('/:_id', deleteFile);

module.exports = router;
