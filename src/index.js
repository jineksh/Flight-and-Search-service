const express = require('express');
const bodyparser = require('body-parser');
const {PORT}=require('./config/server.js');
const Cityrepo = require('./repository/city_repo.js');

const setup = async()=>{
    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log('Server is started');
        const city = new Cityrepo();
        city.createcity({name:'rajkot'});
    })
}

setup();