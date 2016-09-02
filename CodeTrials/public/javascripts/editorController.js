angular.module('codeTrialsApp').controller('editorController', ['$scope', 'codeValidation', function($scope, codeValidation) {

    var onValidationReceived = function(validation) {
        $scope.codeValidationResult = validation;
    };

    $scope.aceLoaded = function(_editor) {
        $scope.code = 'var solution = function(numbers) {\n\treturn Math.max.apply(null, numbers);\n};\n\nexports.solution = solution;\n';
        codeValidation.setFeedback(onValidationReceived);
    };

    $scope.submitCode = function() {
        codeValidation.validateCode(JSON.stringify($scope.code));
    };

}]);