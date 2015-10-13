djello.controller('boardCtrl', ['$scope', 'Restangular', 'Auth', '$location', function($scope, Restangular, Auth, $location){

  Restangular.all('boards').getList().then(function(boards) {
    $scope.boards = boards;
  });

  $scope.createBoard = function(board) {
    var post = $scope.boards.post($scope.newBoard);

    post.then(function(response) {
      $scope.boards.push(response);
    });
  };

  $scope.goToBoard = function() {
    $location.path("/boards/" + String($scope.selectedBoard));
  };

}]);
