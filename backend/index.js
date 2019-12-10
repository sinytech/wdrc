const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');
const favicon = require('serve-favicon');
const path = require('path')

const router = require('./routes');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(__dirname + config.get('static.files')));
app.use('/', express.static(__dirname + config.get('static.public')));
app.use(favicon(path.join(__dirname, config.get('static.public'), 'favicon.ico')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//router
app.use(router);

//start app, connect to db
app.listen(config.get('APP_PORT'), () => {
  console.info(`App listening on port ${config.get('APP_PORT')}!`);
});

module.exports = app;