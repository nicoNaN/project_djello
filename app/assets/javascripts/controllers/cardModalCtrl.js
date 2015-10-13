djello.controller('cardModalCtrl',
  ['$scope',
   'Restangular',
   'ModalService',
   '$location',
   '$state',
   'card',
   'list',
   'members',
   'board',
   function($scope, Restangular, ModalService, $location, $state, card, list, members, board){

  $scope.card = card;

  $scope.members = members;

  $scope.list = list;

  $scope.board = board;

  $scope.isAddMemberOpen = false;

  Restangular.all('users').getList().then(function(users) {
    $scope.allUsers = users;
  });

  Restangular
    .one('boards', $scope.board.id)
    .one('lists', $scope.list.id)
    .one('cards', $scope.card.id)
    .all('activities').getList().then(function(activities) {
      $scope.activities = activities.reverse();
    });

  $( ".column" ).sortable({
    connectWith: ".column",
    handle: ".portlet-header",
    cancel: ".portlet-toggle",
    start: function (event, ui) {
      ui.item.addClass('tilt');
    },
    stop: function (event, ui) {
      ui.item.removeClass('tilt');
    }
  });

  $( ".portlet" )
    .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
    .find( ".portlet-header" )
      .addClass( "ui-widget-header ui-corner-all" )
      .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

  $( ".portlet-toggle" ).click(function() {
    var icon = $( this );
    icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
  });

  $scope.addMember = function() {
    var post = $scope.members.post($scope.selectedUser);

    post.then(function(response) {
      $scope.members.push(response);
    });
  };

  $scope.markCompleted = function(card) {
    card.remove().then(function() {
      close();
      $state.reload();
    });
  };

  $scope.updateCard = function(card) {
    card.put();
  };

  $scope.removeMember = function(member) {
    member.remove().then(function() {
      $scope.members.splice($scope.members.indexOf(member), 1);
    });
  };

}]);
