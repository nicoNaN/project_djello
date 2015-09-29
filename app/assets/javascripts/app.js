var djello = angular.module('djello', []);

djello.controller('TestCtrl', ['$scope', function($scope){
  $scope.hello = "ayy lmangular";
}]);
