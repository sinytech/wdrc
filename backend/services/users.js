const { User } = require('../db/models');

const registerUser = userData => {
    return User.create(userData);
};

const findUserByEmail = email => {
    return User.findOne({ email });
};

const findUserById = _id => {
    return User.findOne({ _id });
};

module.exports = {
    registerUser,
    findUserByEmail,
    findUserById
};