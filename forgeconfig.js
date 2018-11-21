const rollup = require('rollup');
const babel = require('@babel/core');
const fs = require('fs');
const requireFromString = require('require-from-string');

module.exports = {
  make_targets: {
    win32: [
      'squirrel',
    ],
    darwin: [
      'zip',
    ],
    linux: [
      'deb',
      'rpm',
    ],
  },
  electronPackagerConfig: {
    packageManager: 'npm',
  },
  electronWinstallerConfig: {
    name: 'press_f_to_pay_respects',
  },
  electronInstallerDebian: {},
  electronInstallerRedhat: {},
  github_repository: {
    owner: '',
    name: '',
  },
  windowsStoreConfig: {
    packageName: '',
    name: 'pressftopayrespects',
  },
  hooks: {
    generateAssets: async () => {
/*      return new Promise(function (resolve) {
        resolve(rollup.rollup());
      }); */
      // babel.transform(await , { presets: ['@babel/preset-env'] }).code
      console.log('Bundling Babel JavaScript, please wait...');
      const rollupConfig = requireFromString(babel.transform(
        fs.readFileSync('rollup.config.js'),
        { presets: ['@babel/preset-env'] }).code);
      const bundle = await rollup.rollup(rollupConfig.default);
      await bundle.write(rollupConfig.default.output);
    },
  },

};
