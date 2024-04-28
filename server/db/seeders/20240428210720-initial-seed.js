'use strict';
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      { name: 'Alex', email: 'alex@mail', hashpass: bcrypt.hashSync('123', 10) },
      { name: 'John', email: 'john@mail', hashpass: bcrypt.hashSync('123', 10) },
      { name: 'Bob', email: 'bob@mail', hashpass: bcrypt.hashSync('123', 10) }
    ], {});

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    
    await queryInterface.bulkInsert('People', [
      posts.map(({title, body}, ind) => ({
        title,
        body,
        userId: (ind % 3) + 1,
      }))
    ], {});
    
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
