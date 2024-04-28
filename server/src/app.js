const express = require('express');
const morgan = require('morgan');
const messagesRouter = require('./router/messages.router');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/messages', messagesRouter);

module.exports = app;