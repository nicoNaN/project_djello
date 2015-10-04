djello.controller('boardShowCtrl', ['$scope', 'Restangular', 'Auth', '$location', function($scope, Restangular, Auth, $location){

  Restangular.all('boards').getList().then(function(boards) {
    $scope.board = boards[0];
  });

}]);
