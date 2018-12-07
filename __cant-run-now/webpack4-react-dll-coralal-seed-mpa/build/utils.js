const path = require('path');
const fs = require('fs');

exports.getDirFilesSync = function(filePath) {
  const result = [];
  const files = fs.readdirSync(filePath);

  files.forEach(function(filename){
    let filedir = path.join(filePath,filename);
    result.push(filedir);
  });

  return result;
}