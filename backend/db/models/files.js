const { mongoose } = require('../');

const { Schema } = mongoose

const schema = new Schema({
    originalname: {
        type: String,
        required: true,
        minlength: 1
    },
    filename: {
        type: String,
        required: true,
        minlength: 1
    },
    mimetype: {
        type: String,
        required: true
    },
    size: {
        type: Number
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        required: true,
        default: 'image'
    },
    updatedAt: Date,
    createdAt: Date,
});

module.exports = mongoose.model('File', schema);
