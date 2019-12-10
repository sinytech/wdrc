const {mongoose} = require('../');

const { Schema } = mongoose

const schema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    is_finished: {
        type: Boolean,
        default: false
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updatedAt: Date,
    createdAt: Date,
});

module.exports = mongoose.model('Task', schema);
