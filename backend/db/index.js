const mongoose = require('mongoose');
const config = require('config');
const Promise = require('bluebird');

mongoose.Promise = Promise;

mongoose.connect(
    config.get('mongodb'),
    { useCreateIndex: true, useNewUrlParser: true }
)
    .catch(err => {
        console.log(err);
        process.exit(1);
    });

const instance = mongoose.connection;

instance.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = {
    mongoose
};
