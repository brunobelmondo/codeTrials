var services = angular.module('services', ['ngResource']);

services.factory('codeValidation', function($resource) {
    var codeValidation = {};

    var service = $resource('/validate/:code');

    codeValidation.setFeedback = function(onFeedbackReceived) {
        codeValidation.sendFeedback = onFeedbackReceived;
    };

    codeValidation.validateCode = function(codeToTest) {
        service.get({ code: codeToTest }).$promise.then(function(response) {
                codeValidation.sendFeedback(response.data);
            },
            function(data) {
                console.log('code validation done with errors');
            });
    };

    return codeValidation;
});