function pushManyTimes(count) {
  const arr = [];
  for (let index = 0; index < count; index++) {
    const element = Math.random();
    arr.push(element);
  }
  return arr;
}

function unshiftManyTimes(count) {
  const arr = [];
  for (let index = 0; index < count; index++) {
    const element = Math.random();
    arr.unshift(element);
  }
  return arr;
}

// console.time('push');
// pushManyTimes(1e5);
// console.timeEnd('push');
// console.time('unshift');
// unshiftManyTimes(1e5);
// console.timeEnd('unshift');

// const names = [
//   'Alex', 'Bob', 'Charlie', 'David', 'Elon',
// ];
// names.slice(1, 3);
// names.splice(1, 3);
// console.log(names);

// names.push('Elon');
// console.log(names);
// names.join('\n');
// names.split('\n'); split('\r\n')

// const { EOL } = require('node:os');
// const fs = require('fs');

// const res = fs.readFileSync('./.gitignore', 'utf-8');
// const rows = res.split(EOL);
// console.log(rows.length);

const names = [
  'Alex', 'Bob', 'Charlie', 'David', 'Elon',
];
// const res = names.reverse();
const res = names.toReversed();
console.log(res, names, res === names);
