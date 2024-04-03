const fs = require('fs');

function countFilesRecursive(dir) {
  let count = 0;
  const names = fs.readdirSync(dir, { encoding: 'utf8', withFileTypes: true });
  for (const dirent of names) {
    if (dirent.name === 'index.js') {
      count++;
      console.log(`${dir}/index.js`);
    } else if (dirent.isDirectory()) {
      count += countFilesRecursive(`${dir}/${dirent.name}`);
    }
  }
  return count;
}

console.log(countFilesRecursive('.'));
