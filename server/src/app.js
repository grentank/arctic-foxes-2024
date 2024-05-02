const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
// const cors = require('cors');
const messagesRouter = require('./router/messages.router');
const authRouter = require('./router/auth.router');
const tokensRouter = require('./router/tokens.router');

const app = express();

// app.use(cors({
//   origin: true,
//   credentials: true,
// }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use('/api/tokens', tokensRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/auth', authRouter);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

module.exports = app;
