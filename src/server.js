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

const userRoute = require('./routes/userRoute');

app.use('/user', userRoute);
