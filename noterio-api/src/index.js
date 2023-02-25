const express = require('express');
const logger = require('morgan');
const fs = require('fs');

const handlerRoutes = require('./handlers/handlerRoutes')
const handlerModels = require('./handlers/handlerModels')

require('dotenv').config();
// Express configuration
const app = express();

app.use(express.json());
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send('<h1>olá<h1>')
})

// DB

const Sequelize = require("sequelize");

const sequelize = new Sequelize('noterio', 'root', process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: true,
    logging: console.log()
});

async function LoginDB(sequelize){
    try {
        await sequelize.authenticate();
        console.log('Conexão com o Banco de Dados foi estabelecida.💾');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

//Handlers

handlerRoutes(app)
handlerModels(sequelize)

app.listen('7447', (error) => {
    if(error){
        console.debug(error)
    }else{
        console.log('listening on http://localhost:7447 !')
    }
})

LoginDB(sequelize)