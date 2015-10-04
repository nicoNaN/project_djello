djello.controller('boardCtrl', ['$scope', 'Restangular', 'Auth', '$location', function($scope, Restangular, Auth, $location){

  Auth.currentUser().then(function(user) {
    $scope.currentUser = user;
  });

  Restangular.all('boards').getList().then(function(boards) {
    $scope.boards = boards;
  });

  $scope.deleteBoard = function(board) {
    board.remove().then(function(){
      // http://stackoverflow.com/questions/18523806/deleting-entry-with-restangular
      $scope.boards.splice($scope.boards.indexOf(board), 1);
    });
  };

  $scope.createBoard = function(board) {
    var newBoard = { title: $scope.newBoardTitle };
    var post = $scope.boards.post(newBoard);

    post.then(function(response) {
      $scope.boards.push(response);
    });
  };

}]);
