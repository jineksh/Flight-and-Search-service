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
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelName: 'Airbus A380-800',
        capacity: 853,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'Boeing 747-400',
        capacity: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'Boeing 747-8',
        capacity: 769,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelName: 'Airbus A350-1000',
        capacity: 450,
        createdAt: new Date(),
        updatedAt: new Date()
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
