const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const messagesRouter = require('./router/messages.router');
const authRouter = require('./router/auth.router');
const tokensRouter = require('./router/tokens.router');

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

app.use('/api/tokens', tokensRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/auth', authRouter);

module.exports = app;
