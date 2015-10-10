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

}]);
