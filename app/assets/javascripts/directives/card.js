djello.directive('card', function() {
  return {
    templateUrl: "../directives/card.html",
    restrict: "A",
    replace: true,
    scope: {
      card: "="
    }
  };
});
