const { Cityrepo } = require('../repository/index');

class CityService {
    constructor() {
        this.cityrepository = new Cityrepo();
    }

    async createcity(data) {

        try {
            const city = await  this.cityrepository.createcity(data);
            return city;

        } catch (err) {
            throw (err);
        }
    }

    async deletecity(cityid) {

        try {
            const response = await this.cityrepository.deletecity(cityid);
            return response;
        } catch (err) {
            throw (err);
        }
    }


    async updatecity(cityid,data) {

        try {
            const city =await this.cityrepository.updatecity(cityid,data);
            return city;
        } catch (err) {
            throw (err);
        }
    }

    async getcity(cityid) {

        try {
            const city =await this.cityrepository.getcity(cityid);
            return city;
        } catch (err) {
            throw (err);
        }
    }

    async getallcity(filter){
        try {
            const cities =await this.cityrepository.getallcity(filter);
            return cities;
        } catch (err) {
            throw (err);
        }
    }

    async createallcity(arr){
        try{
            const cities = await this.cityrepository.createall(arr);
            return cities;
        }
        catch(err){
            throw(err);
        }
    }
}

module.exports = CityService;