var say = function(str) {
    var fs = require('fs');
    var path = require('path');
    //console.log(path.dirname(fs.realpathSync(__filename)));
    console.log(str);
};

exports.say = say;