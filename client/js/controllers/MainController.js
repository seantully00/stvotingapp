var sean="sean"

myapp.controller('MainController', ['$scope', 'name', function($scope, name) {
  name.success(function(sean) {
    $scope.name = sean;
  });
}]);