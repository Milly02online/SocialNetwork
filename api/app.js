require("dotenv").config();

const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();


const corsOptions = {
  origin: "https://localhost:5173",
  optionsSuccessStatus:200,
}

app.use(cors('corsOptions'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);

module.exports = app;