'use strict';

//import { hashPassword } from '../../lib/index.js';
//import * as bcrypt from 'bcryptjs';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const hashPassword = await bcrypt.hash('12345', 5);
    await queryInterface.bulkInsert('users', [
      {
        email: 'admin@gmail.com',
        password: hashPassword,
        name: 'Admin',
        lastName: 'Administrator',
        phone: '+79990001122',
        сompanyName: 'AdminCompany',
        banned: false,
        banReason: '',
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
      },
      {
        email: 'user@gmail.com',
        password: hashPassword,
        name: 'User',
        lastName: 'User',
        phone: '+79990001122',
        сompanyName: 'UserCompany',
        banned: false,
        banReason: '',
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
