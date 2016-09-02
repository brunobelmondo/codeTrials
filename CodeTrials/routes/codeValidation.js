var express = require('express');
var router = express.Router();

var exec = require('child_process').exec;

router.get('/*', function(req, res, next) {
    var answer = { data: 'nothing' };
    var testParameters = '[1,2,3]';
    var testCode = req.param('code');
    console.log('received code :' + testCode);
    //JSON.stringify('var solution = function(numbers) {return Math.max.apply(null, numbers);};exports.solution = solution;');

    exec('../js_solver/launch ' + testCode + ' ' + testParameters, function(error, stdout, stderr) {
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
        answer = { data: stdout };
        if (error !== null) {
            console.log('exec error: ', error);
            answer = { data: stderr };
        }

        res.type('application/json');
        res.send(answer);
        res.end();
    });
});

module.exports = router;