const { readdirSync } = require('fs');

function getUnionPackages() {
  const directories = readdirSync('node_modules/@xo-union', { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => `@xo-union/${dirent.name}`);
  console.log('Union Directories: ', directories);
  return directories;
}

module.exports = getUnionPackages;
