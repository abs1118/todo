angular.module('TodolistsEditAPP', []).
controller('TodolistsEditCtrl', function($scope, $state, $stateParams, $timeout, 
        $ionicGesture, $ionicActionSheet, $ionicNavBarDelegate, 
        MenuService, TodoListService) {

  // 当前group所有的任务（包括未完成和已完成）
  $scope.entities = [];

  // 根据列表ID显示初始数据
  var findAllTodos = function() {
      if ($stateParams.groupId != -2) {
        TodoListService.findByGroupId($stateParams.groupId, 1).then(function(todolists) {
          $scope.todolists = todolists;// 未完成
          $scope.entities = $scope.entities.concat(todolists);
        });
      };
      TodoListService.findByGroupId($stateParams.groupId, 2).then(function(todolists) {
        $scope.todolists_finish = todolists;// 已完成
          $scope.entities = $scope.entities.concat(todolists);
      });
  };
  findAllTodos();

  // 选中处理
  $scope.selected = [];
  var updateSelected = function(action, id) {
    if (action === 'add' && $scope.selected.indexOf(id) === -1) {
      $scope.selected.push(id);
    }
    if (action === 'remove' && $scope.selected.indexOf(id) !== -1) {
      $scope.selected.splice($scope.selected.indexOf(id), 1);
    }
  };
  $scope.updateSelection = function($event, id) {
    var checkbox = $event.target;
    var action = (checkbox.checked ? 'add' : 'remove');
    updateSelected(action, id);
    $ionicNavBarDelegate.setTitle("选中"+$scope.selected.length+"项");
  };
  $scope.selectAll = function($event) {
    var allbtn = $event.target;
    var action = ($scope.isSelectedAll() ? 'remove' : 'add');
    for ( var i = 0; i < $scope.entities.length; i++) {
      var entity = $scope.entities[i];
      updateSelected(action, entity.id);
    }
    $ionicNavBarDelegate.setTitle("选中"+$scope.selected.length+"项");
  };
  $scope.getSelectedClass = function(entity) {
    return $scope.isSelected(entity.id) ? 'selected' : '';
  };
  $scope.isSelected = function(id) {
    return $scope.selected.indexOf(id) >= 0;
  };
  $scope.isSelectedAll = function() {
    return $scope.selected.length === $scope.entities.length;
  };

  // "批量移动"Event
  $scope.move = function(todoid) {
      alert("move");
  };

  // "批量设置时间"Event
  $scope.setDate = function(todoid) {
      alert("setDate");
  };

  // "批量删除"Event
  $scope.deleteTodo = function(todoid) {
      alert("delete");
  };
});