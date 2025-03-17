const { City } = require('../models/index');
const { Op } = require('sequelize');

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
      return city;
    } catch (err) {
      throw (err);
    }
  }

  async getallcity(filter) {
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name
            }
          }
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;

    }
    catch (err) {
      throw (err);
    }
  }

}

module.exports = Cityrepo;