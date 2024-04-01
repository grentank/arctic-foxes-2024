const { fakerRU: faker } = require('@faker-js/faker');

function generateNames(amount) {
  const names = [];
  for (let index = 0; index < amount; index++) {
    const newName = faker.person.fullName();
    const obj = { name: newName };
    names.unshift(obj);
  }
  return names;
}

module.exports = { generateNames };
