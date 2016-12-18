var sean="sean"

var myApp = angular.module('myApp',[]);

myApp.controller('MainController', ['$scope', 'name', function($scope, name) {
  name.success(function(sean) {
    $scope.name = sean;
  });
}]);