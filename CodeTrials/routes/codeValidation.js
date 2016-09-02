var express = require('express');
var router = express.Router();

router.get('/*', function(req, res, next) {
    var answer = { data: 'yes I received it' };
    res.type('application/json');
    res.send(answer);
    res.end();
});

module.exports = router;