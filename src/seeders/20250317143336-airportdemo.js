'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports',[{
      name:'IATA: RAJ, ICAO: VARK',
      cityId:1,
      createdAt : new Date(),
      updatedAt : new Date()
  
     },
     {
      name:'Kadapa Airport',
      cityId:18,
      createdAt : new Date(),
      updatedAt : new Date()
  
     },
     {
      name:'Kempegowda International Airport',
      cityId:18,
      createdAt : new Date(),
      updatedAt : new Date()
  
     },
     {
      name:'Indira Gandhi International Airport',
      cityId:8,
      createdAt : new Date(),
      updatedAt : new Date()
  
     }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
