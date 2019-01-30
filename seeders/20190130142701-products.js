'use strict';

var faker = require('faker');
var Project = require('../models').Project;

module.exports = {
  up: (queryInterface, Sequelize) => {
    var projects = []
    for (var i = 1; i <= 100; i++) {
      projects.push(
        {
          name: faker.name.findName(),
          created_at: new Date(),
          updated_at: new Date(),
          version: 0
        }
      )
    }
    return queryInterface.bulkInsert('projects', projects, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projects', null, {});
  }
};
