djello.controller('cardModalCtrl', ['$scope', 'ModalService', '$stateParams', 'Restangular', 'Auth', '$location', 'title', 'card', function($scope, ModalService, $stateParams, Restangular, Auth, $location, title, card){

  $scope.title = title;

  $scope.card = card;

}]);
