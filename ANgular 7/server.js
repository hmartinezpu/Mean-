'use strict'
const express = require('express');
const authRoutes = require ('./auth/authrutes')
const app = express();
const cors = require('cors');
const propierties = require('./config/properties');

const router = express.Router();
const DB = require('./config/db');
//se inicia la bd
DB();
const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);
app.use(cors());

app.listen(3000, ()=>console.log('server running'));