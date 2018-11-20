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
      console.log('test');
    },
  },

};
