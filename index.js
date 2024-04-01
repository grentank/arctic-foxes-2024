const fs = require('fs');
const generateEmails = require('./utils/generateEmails');
const { generateNames } = require('./utils/generateNames');

// const name = faker.person.fullName({ sex: 'male' });
// console.log(name);

function run() {
  const amount = process.argv[2];
  const amountNumber = Number(amount);

  if (Number.isNaN(amountNumber)) return;

  const names = generateNames(amountNumber);
  const emails = generateEmails(amountNumber);
  const rows = [];
  for (let index = 0; index < amount; index++) {
    const email = emails[index];
    const nameObj = names[index];
    const { name } = nameObj;
    const str = `${email}\t${name}`;
    console.log('str -->>', str);
    rows.push(str);
    // fs.appendFileSync('./output.txt', str, 'utf8');
  }
  fs.writeFileSync('./output.txt', rows.join('\n'), 'utf8');
}

run();

// const res = generateEmails(2);
// console.log(res);
