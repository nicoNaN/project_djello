djello.controller('boardCtrl', ['$scope', 'Restangular', 'Auth', function($scope, Restangular, Auth){

  Auth.currentUser().then(function(user) {
    $scope.currentUser = user.id;
  });

  $scope.boards = Restangular.one('users', $scope.currentUser).getList('boards').$object;

}]);
