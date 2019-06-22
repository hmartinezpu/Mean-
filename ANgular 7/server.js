'use strict'
const express = require('express');
const authRoutes = require ('./auth/authrutes')
const app = express();
const propierties = require('./config/properties');

const router = express.Router();
const DB = require('./config/db');
//se inicia la bd
DB();

app.listen(3000, ()=>console.log('server running'));