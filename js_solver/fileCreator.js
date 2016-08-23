var fs = require('fs');
var fileContent = '"' + process.argv[2] + '"';
fileContent = fileContent.replace(/\n/g, "");

fs.writeFile('solution.js', JSON.parse(fileContent));