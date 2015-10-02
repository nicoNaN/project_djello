var djello = angular.module('djello', ['ui.router']);

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
