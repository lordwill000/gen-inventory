import { camelCase } from 'lodash';

const requireModule = require.context('.', true, /index\.js$/);
const modules = {};

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js') return;

  const regex = /(\.\/[^/]+)(\/index\.js)/g;

  if (!regex.test(fileName)) return;

  const moduleName = camelCase(fileName.replace(/(\.\/|\/index\.js)/g, ''));
  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default,
  };
});

export default modules;
