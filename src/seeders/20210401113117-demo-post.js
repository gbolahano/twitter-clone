"use strict";
const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          content: faker.lorem.sentence(15),
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: faker.lorem.sentence(15),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: faker.lorem.sentence(15),
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: faker.lorem.sentence(15),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: faker.lorem.sentence(15),
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: faker.lorem.sentence(15),
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
