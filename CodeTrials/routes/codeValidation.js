var express = require('express');
var router = express.Router();

var exec = require('child_process').exec;

router.get('/*', function(req, res, next) {
    var answer = { data: 'nothing' };
    var testParameters = req.param('testSuite');
    var testCode = req.param('code');
    console.log('received code:' + testCode);
    console.log('received tests:' + testParameters);

    exec('../js_solver/launch ' + testCode + ' ' + testParameters, function(error, stdout, stderr) {
        answer = { data: 'Tested code with:' + testParameters + '. Got following result:\n' + stdout + stderr };
        if (error !== null) {
            console.log('exec error: ', error);
            answer = { data: 'execution error' };
        }

        res.type('application/json');
        res.send(answer);
        res.end();
    });
});

module.exports = router;