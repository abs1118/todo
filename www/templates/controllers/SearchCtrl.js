angular.module('SearchAPP', []).controller('SearchCtrl', function($scope, $stateParams, TodoListService) {
  $scope.searchKey = "";

// "搜索任务"Event
  $scope.searchToDo = function(searchKey) {
      if (searchKey != undefined && searchKey != ""){
          TodoListService.findByTitle(searchKey).then(function(todolists) {
            $scope.todolists = todolists;
          });
      }
  }
});