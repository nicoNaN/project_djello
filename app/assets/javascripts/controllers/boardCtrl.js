djello.controller('boardCtrl', ['$scope', 'Restangular', 'Auth', function($scope, Restangular, Auth){

  Auth.currentUser().then(function(user) {
    $scope.currentUser = user;
  });

  Restangular.all('boards').getList().then(function(boards) {
    $scope.boards = boards;
  });

}]);
