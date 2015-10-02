var djello = angular.module('djello', ['ui.router', 'restangular']);

djello.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);

djello.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/boards/index");

  $stateProvider
    .state('boards', {
      url: "/boards",
      templateUrl: "/templates/boards.html"
    })

    .state('boards.index', {
      url: "/index",
      templateUrl: "/templates/boardsIndex.html",
      controller: "boardCtrl"
    });
});
