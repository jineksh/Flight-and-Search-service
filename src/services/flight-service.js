const {Flightrepo}=require('../repository/index');

class Flightservice{
    constructor(){
        this.flightrepository = new Flightrepo();
    }

    async createflight(data){
        try{
            const flight = await this.flightrepository.create(data);
            return flight;
        }
        catch(err){
            throw(err);
        }
    }

    async deleteflight(flightid){
        try{
            const response = await this.flightrepository.delete(flightid);
            return response;
        }
        catch(err){
            throw(err);
        }
    }

    async updateflight(flightid,data){
        try{
            const flight = await this.flightrepository.update(flightid,data);
            return flight;
        }
        catch(err){
            throw(err);
        }
    }

    async getflight(flightid){
        try{
            const flight = await this.flightrepository.get(flightid);
            return flight;
        }
        catch(err){
            throw(err);
        }
    }

    async getallflight(data){
        try{
            const flight = await this.flightrepository.getall(data);
            return flight;
        }
        catch(err){
            throw(err);
        }
    }



}
module.exports=Flightservice;