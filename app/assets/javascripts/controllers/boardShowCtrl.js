djello.controller('boardShowCtrl', ['$scope', 'Restangular', 'Auth', '$location', function($scope, Restangular, Auth, $location){

  Restangular.all('boards').getList().then(function(boards) {
    $scope.board = boards[0];
    // $scope.lists = $scope.board.getList("lists").$object;
    $scope.board.getList('lists').then(function(lists) {
      $scope.lists = lists;
      // n+1, use rails jbuilder templates
      $scope.lists.forEach(function(list) {
        list.cards = Restangular.one('boards', $scope.board.id).one('lists', list.id).getList('cards').$object;
      });
    });
  });

  $scope.createList = function(list) {
    var newList = { title: $scope.newListTitle,
                    description: $scope.newListDescription };
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

}]);
