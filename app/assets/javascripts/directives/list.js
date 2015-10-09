djello.directive('list', function() {
  return {
    templateUrl: "../directives/list.html",
    restrict: "A",
    replace: true,
    scope: {
      list: "=",
      deleteList: "&"
    }
  };
});
