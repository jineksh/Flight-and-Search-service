const { City } = require('../models/index');


class Cityrepo {

  async createcity({ name }) {
    try {
      const city = await City.create({ name });
      console.log(city);
      return city;
    }
    catch (err) {
      throw (err);
    }
  }

  async deletecity(cityid) {
    try {
      await City.destroy({
        where: {
          id: cityid
        }
      })
      return true;
    }
    catch (err) {
      throw (err);
    }
  }

  async updatecity(cityid, data) {
    try {
      const city = await City.findByPk(cityid);
      city.name = data.name;
      await city.save();
      return city;
    } catch (err) {
      throw (err);
    }
  }

  async getcity(cityid) {
    try {
      const city = await City.findByPk(cityid);
      console.log(city);
      return city;
    } catch (err) {
      throw (err);
    }
  }

}

module.exports = Cityrepo;