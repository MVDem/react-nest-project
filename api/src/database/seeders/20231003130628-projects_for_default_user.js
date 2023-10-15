'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('projects', [
      {
        name: 'Project 1',
        adress: 'Adress 1',
        userId: 2,
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
      },
      {
        name: 'Project 2',
        adress: 'Adress 2',
        userId: 2,
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
      },
    ]);
  },
};
