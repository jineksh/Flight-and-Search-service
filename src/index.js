const express = require('express');
const bodyparser = require('body-parser');
const {PORT}=require('./config/server.js');
const Apiroutes = require('./routes/index.js');
const sequelize = require("./models/index").sequelize;
const { City , Airport } = require('./models/index.js');

const setup = async()=>{
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',Apiroutes);
    app.listen(PORT,async()=>{
        console.log('Server is started');
        
    })
}
setup();