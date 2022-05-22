const express = require('express');
const path = require('path');
const static = require('serve-static');

require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.listen(PORT, () => {
  console.log(`The Express Server is Listening at port : ${PORT}`);
});

const indexRoute = require('./routes/index');
const userRoute = require('./routes/userRoute');
const homeRoute = require('./routes/home');
const testRoute = require('./routes/test');
const loginRoute = require('./routes/login');
const hospitalRoute = require('./routes/findHospital');
app.use('/public', express.static(__dirname + '/public'));
// app.use('/user', userRoute);
app.use('/', homeRoute);
app.use('/', loginRoute);
app.use('/', testRoute);
app.use('/hospitalFind', hospitalRoute);
