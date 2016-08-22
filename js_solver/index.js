http = require('http');
answer = require('./solution.js');

function resolve(jsonData) {
    var test_data = JSON.parse(jsonData);
    var result = answer.solution(test_data);
    return JSON.stringify(result);
}

var params = function(req) {
    var q = req.url.split('?'),
        result = {};

    if (q.length >= 2) {
        q[1].split('&').forEach(function(item) {
            try {
                result[item.split('=')[0]] = item.split('=')[1];
            } catch (e) {
                result[item.split('=')[0]] = '';
            }
        });
    }
    return result;
};

server = http.createServer(function(request, response) {
    var requestParameters = params(request);
    if (requestParameters["data"] != undefined) {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end(resolve(requestParameters["data"]));
    } else {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end();
    }
});

port = 3000;
host = '127.0.0.1';
server.listen(port, host);