answer = require('./solution.js');

var test_data = JSON.parse(process.argv[2]);
var result = answer.solution(test_data);
console.log(JSON.stringify(result));
