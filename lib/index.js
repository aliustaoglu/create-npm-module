const ncp = require('ncp').ncp;
const prompt = require('prompt');
const fs = require('fs');

const packageJson = {
  name: 'my-npm-module',
  version: '0.0.1',
  description: 'Simple npm package for React.JS',
  main: 'build/index.js',
  dependencies: {},
  devDependencies: {
    'prop-types': '^15.6.0',
    react: '^15.5.4',
    webpack: '^2.6.1',
    'babel-cli': '^6.24.1',
    'babel-core': '^6.24.1',
    'babel-loader': '^7.0.0',
    'babel-plugin-transform-object-rest-spread': '^6.23.0',
    'babel-plugin-transform-react-jsx': '^6.24.1',
    'babel-preset-env': '^1.5.1'
  },
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
    start: 'webpack --watch',
    build: 'webpack'
  },
  repository: {
    type: 'git',
    url: 'git+https://github.com/aliustaoglu/create-npm-module.git'
  },
  keywords: ['react'],
  author: 'Cuneyt Aliustaoglu',
  license: 'ISC',
  bugs: {
    url: 'https://github.com/aliustaoglu/create-npm-module/issues'
  },
  homepage: 'https://github.com/aliustaoglu/create-npm-module#readme'
};

var createModule = function(moduleName) {
  const path = require('path');
  const workingFolder = path.join(process.cwd(), moduleName);
  const moduleFolder = path.join(path.dirname(fs.realpathSync(__filename)), '../module');
  const packageJsonLocation = path.join(workingFolder, 'package.json');

  if (!fs.existsSync(workingFolder)) {
    fs.mkdirSync(workingFolder);
  }

  ncp(moduleFolder, workingFolder, function(err) {
    if (err) {
      return console.error(err);
    }
  });

  console.log('This wizard will create the boilerplate for you to publish your React.JS components to NPM');
  var prompt = require('prompt');
  prompt.start();
  prompt.get(['version', 'description', 'author'], function(err, result) {
    if (err) {
      console.log(err);
      return 1;
    }
    console.log('Command-line input received:');
    const { version, description, author } = result;
    const newPackageJson = Object.assign({}, packageJson, { name: moduleName, version, description, author });
    fs.writeFile(packageJsonLocation, JSON.stringify(newPackageJson, null, 2), function(err) {
      if (err) throw err;
      console.log('Your npm module has been created: \n' + workingFolder);
    });
  });
};

exports.createModule = createModule;
