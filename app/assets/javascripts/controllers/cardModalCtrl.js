djello.controller('cardModalCtrl',
  ['$scope',
   'Restangular',
   'ModalService',
   '$location',
   'card',
   'list',
   'members',
   function($scope, Restangular, ModalService, $location, card, list, members){

  $scope.card = card;

  $scope.members = members;

  $scope.list = list;

  $scope.isAddMemberOpen = false;

  Restangular.all('users').getList().then(function(users) {
    $scope.allUsers = users;
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
