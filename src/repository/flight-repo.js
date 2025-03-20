const {Flight} = require('../models/index');
const {Op} = require('sequelize');
class Flightrepo{
    #fliterdata(data) {
            const fliterobj = {};
            const arr = [];
            if(data.arrivalid){
                fliterobj.arrivalAirportId = data.arrivalid;
            }
            if(data.departureid){
                fliterobj.departureAirportId = data.departureid;
            }
            // if(data.minprice && data.maxprice){
            //     Object.assign(fliterobj,{price : {[Op.between]:[data.minprice,data.maxprice]}}); 
            // }
            if(data.minprice){
                arr.push(data.minprice);
            }
            if(data.maxprice){
                arr.push(data.maxprice);
            }
            Object.assign(fliterobj,{price : {[Op.between] : arr}});
            return fliterobj;
        }
    async create(data){
        try{
            const flight = await Flight.create(data);
            return flight;
        }
        catch(err){
            throw(err);
        }
    }

    async delete(flightid){
        try{
            const response = await Flight.destroy({
                where:{
                    id:flightid
                }
            });
            return response;
        }
        catch(err){
            throw(err);
        }
    }

    async update(flightid,data){
        try{
            const flight = await Flight.update(data,{
                where:{
                    id:flightid
                }
            });
            return flight;
        }
        catch(err){
            throw(err);
        }
    }

    async get(flightid){
        try{
            const flight = await Flight.findByPk(flightid);
            return flight;
        }
        catch(err){
            throw(err);
        }
    }

    async getall(data){
        try{
            const fliterobj = this.#fliterdata(data);
            const flight = await Flight.findAll({
                where : fliterobj
            });
            return flight;
        }
        catch(err){
            throw(err);
        }
    }

}

module.exports = Flightrepo;