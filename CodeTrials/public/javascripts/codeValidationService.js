var services = angular.module('services', ['ngResource']);

services.factory('codeValidation', function($resource) {
    var codeValidation = {};

    var service = $resource('/validate/:inputCode/:test', { inputCode: '@code', test: '@testSuite' });

    codeValidation.setFeedback = function(onFeedbackReceived) {
        codeValidation.sendFeedback = onFeedbackReceived;
    };

    codeValidation.validateCode = function(codeToTest) {
        var testData = JSON.stringify('[1, 2, 3]');
        service.get({ code: codeToTest, testSuite: testData }).$promise.then(function(response) {
                codeValidation.sendFeedback(response.data);
            },
            function(data) {
                console.log('code validation done with errors');
            });
    };

    return codeValidation;
});