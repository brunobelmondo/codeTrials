angular.module('codeTrialsApp').controller('editorController', ['$scope', 'codeValidation', function($scope, codeValidation) {

    $scope.aceLoaded = function(_editor) {
        $scope.code = 'var solution = function(numbers) {\n\treturn Math.max.apply(null, numbers);\n};\n\nexports.solution = solution;\n';
    };

    $scope.submitCode = function() {
        console.log(JSON.stringify($scope.code));
        codeValidation.validateCode(JSON.stringify($scope.code));
    };

}]);