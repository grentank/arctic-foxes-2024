const randomProfile = require('random-profile-generator');

function generateEmails(amount) {
  const emails = [];
  for (let index = 0; index < amount; index++) {
    const email = randomProfile.email();
    emails.push(email);
  }
  return emails;
}

module.exports = generateEmails;
