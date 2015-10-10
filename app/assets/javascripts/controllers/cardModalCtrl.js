djello.controller('cardModalCtrl', ['$scope', 'ModalService', '$stateParams', 'Restangular', 'Auth', '$location', 'card', function($scope, ModalService, $stateParams, Restangular, Auth, $location, card){

  $scope.card = card;

}]);
