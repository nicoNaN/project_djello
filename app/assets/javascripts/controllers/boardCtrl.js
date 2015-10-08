djello.controller('boardCtrl', ['$scope', 'Restangular', 'Auth', '$location', function($scope, Restangular, Auth, $location){

  // Auth.currentUser().then(function(user) {
  //   $scope.currentUser = user;
  // });

  Restangular.all('boards').getList().then(function(boards) {
    $scope.boards = boards;
    console.log($scope.boards);
  });

  $scope.createBoard = function(board) {
    var post = $scope.boards.post($scope.newBoard);

    post.then(function(response) {
      $scope.boards.push(response);
    });
  };

  $scope.goToBoard = function() {
    console.log($scope.selectedBoard);
    $location.path("/boards/" + String($scope.selectedBoard));
  };

}]);
