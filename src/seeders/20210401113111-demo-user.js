'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      fullname: 'Maxwell Jupiter',
      handle: 'maxJupe',
      avatarUri: 'https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fullname: 'Sylver Neptune',
      handle: '@sylNeptune',
      avatarUri: 'https://randomuser.me/api/portraits/women/90.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};

