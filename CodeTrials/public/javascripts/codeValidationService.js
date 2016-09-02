var services = angular.module('services', ['ngResource']);

services.factory('codeValidation', function($resource) {
    var codeValidation = {};

    var service = $resource('/validate/:code');

    codeValidation.validateCode = function(codeToTest) {
        service.get({ code: codeToTest }).$promise.then(function(data) {
            console.log('code validation done with succcess');
        }, function(data) {
            console.log('code validation done with errors');
        });
    };

    return codeValidation;
});