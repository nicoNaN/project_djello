djello.controller('boardShowCtrl', ['$scope', '$stateParams', 'Restangular', 'Auth', '$location', function($scope, $stateParams, Restangular, Auth, $location){

  Restangular.all('boards').getList().then(function(boards) {
    $scope.allBoards = boards;
    $scope.board = _.find(boards, function(b) { return b.id == $stateParams.boardId });
    $scope.selectedBoard = $scope.board.id;
    // $scope.lists = $scope.board.getList("lists").$object;
    $scope.board.getList('lists').then(function(lists) {
      $scope.lists = lists;
      // n+1, use rails jbuilder templates
      $scope.lists.forEach(function(list) {
        list.cards = Restangular
          .one('boards', $scope.board.id)
          .one('lists', list.id)
          .getList('cards')
          .$object;
      });
    });
  });

  $scope.updateBoardTitle = function() {
    $scope.board.put();
  };

  $scope.updateList = function(list) {
    list.put();
  }

  $scope.createList = function(list) {
    var newList = { title: $scope.newListTitle,
                    description: $scope.newListDescription };
    var post = $scope.lists.post(newList);

    post.then(function(response) {
      $scope.lists.push(response);
    });
  };

  $scope.createBlankList = function() {
    var newList = { title: "New List Title",
                    description: "New List Description" };
    var post = $scope.lists.post(newList);

    post.then(function(response) {
      $scope.lists.push(response);
    });
  };

  Auth.currentUser().then(function(user) {
    $scope.currentUser = user;
  });

  $scope.createCard = function(card) {
    var newCard = $scope.newCard;
    // newCard.user_id = String($scope.currentUser.id);
    // console.log(newCard);

    Restangular
      .one('boards', $scope.board.id)
      .one('lists', newCard.list_id)
      .all('cards').post(newCard).then(function(response) {
        $scope.lists[newCard.list_id - 1].cards.push(response);
      });
  };

  $scope.deleteList = function(list) {
    list.remove().then(function() {
      $scope.lists.splice($scope.lists.indexOf(list), 1);
    });
  };

  // refactor this in to board service, do same for cards and lists
  $scope.deleteBoard = function(board) {
    board.remove().then(function(){
      // http://stackoverflow.com/questions/18523806/deleting-entry-with-restangular
      $location.path("/boards/index");
    });
  };

  $scope.goToBoard = function() {
    console.log($scope.selectedBoard);
    $location.path("/boards/" + String($scope.selectedBoard));
  };

}]);
