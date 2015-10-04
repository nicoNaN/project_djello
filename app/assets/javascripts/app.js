var djello = angular.module('djello', ['ui.router', 'restangular', 'Devise']);

djello.config(['RestangularProvider', function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
}]);

djello.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('boards', {
      url: "/boards",
      templateUrl: "/templates/boards.html"
    })

    .state('boards.index', {
      url: "/index",
      templateUrl: "/templates/boardsIndex.html",
      controller: "boardCtrl"
    })

    .state('boards.show', {
      url: "/:boardId",
      templateUrl: "/templates/boardShow.html",
      controller: "boardShowCtrl"
    })

    .state('login', {
      url: "/",
      templateUrl: "/templates/login.html",
      controller: "loginCtrl"
    });
});
