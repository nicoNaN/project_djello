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

  $scope.updateCard = function(card) {
    card.put();
  };

  $scope.removeMember = function(member) {
    member.remove().then(function() {
      $scope.members.splice($scope.members.indexOf(member), 1);
    });
  }

}]);
