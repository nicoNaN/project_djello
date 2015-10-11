djello.controller('cardModalCtrl',
  ['$scope',
   'Restangular',
   'ModalService',
   '$location',
   'card',
   'list',
   'members',
   'board',
   function($scope, Restangular, ModalService, $location, card, list, members, board){

  $scope.card = card;

  $scope.members = members;

  $scope.list = list;

  $scope.board = board;

  $scope.isAddMemberOpen = false;

  Restangular.all('users').getList().then(function(users) {
    $scope.allUsers = users;
  });

  Restangular
    .one('boards', $scope.board.id)
    .one('lists', $scope.list.id)
    .one('cards', $scope.card.id)
    .all('activities').getList().then(function(activities) {
      $scope.activities = activities.reverse();
    });

  $scope.addMember = function() {
    var post = $scope.members.post($scope.selectedUser);

    post.then(function(response) {
      $scope.members.push(response);
    });
  }

  $scope.updateCard = function(card) {
    card.put();
  };

  $scope.removeMember = function(member) {
    member.remove().then(function() {
      $scope.members.splice($scope.members.indexOf(member), 1);
    });
  };

}]);
