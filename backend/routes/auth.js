const express = require('express');
const multer = require('multer');
const path = require('path');

const auth = require('../controllers/auth');

const router = express.Router();

const storage = multer.diskStorage({
    destination: 'files/',
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

router.post('/signin', auth.signIn);
router.post('/signup', upload.single('file'), auth.signUp);

module.exports = router;
