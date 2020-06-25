const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require("nodemailer");

const { mongoose } = require('./db.js');
var ratechartController = require('./controllers/ratechartController.js');
//var aboutusController = require('./controllers/aboutusController');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/ratechart', ratechartController);
//app.use('/aboutus', aboutusController);

