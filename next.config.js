const withTranspileModules = require('next-transpile-modules');
const getUnionPackages = require('./scripts/getUnionPackages');
const withTM = withTranspileModules(getUnionPackages());

module.exports = withTM({
  webpack5: false
});
