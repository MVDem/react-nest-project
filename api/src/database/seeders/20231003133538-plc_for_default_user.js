'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('plc', [
      {
        name: 'РУ-10кВ',
        url: '#',
        system: 'HightVolt',
        projectId: 1,
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
      },
      {
        name: 'РУ-6кВ',
        url: '#',
        system: 'HightVolt',
        projectId: 1,
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
      },
      {
        name: 'РУ-10кВ',
        url: '#',
        system: 'HightVolt',
        projectId: 2,
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
      },
    ]);
  },
};
