var ncp = require('ncp').ncp;

var createModule = function(moduleName) {
  var fs = require('fs');
  var path = require('path');
  var workingFolder = path.join(process.cwd(), moduleName);
  var moduleFolder = path.join(path.dirname(fs.realpathSync(__filename)), '../module');

  if (!fs.existsSync(workingFolder)) {
    fs.mkdirSync(workingFolder);
  }

  ncp(moduleFolder, workingFolder, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log('Your npm module has been created: \n' + workingFolder);
  });
};

exports.createModule = createModule;
