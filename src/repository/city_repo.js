const { City } = require('../models/index');


class Cityrepo{

  async createcity({ name }){
    try{
        const city = await City.create({name});
        return city;
    }
    catch(err){
        throw(err);
    }
  }

  async deletecity(cityid){
    try{
        await City.destroy({
            where:{
                id:cityid
            }
        })
    }
    catch(err){
        throw(err);
    }
  }


}

module.exports=Cityrepo;