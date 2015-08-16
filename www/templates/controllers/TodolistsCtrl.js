angular.module('TodolistsAPP', []).
controller('TodolistsCtrl', function($scope, $state, $stateParams, $timeout, 
       $ionicGesture, $ionicActionSheet, $ionicNavBarDelegate,
       MenuService, TodoListService) {

  // 从向导页面跳转过来的话，不显示返回按钮
  $timeout( function() {
    $ionicNavBarDelegate.showBackButton(false);
  }, 0);

  // 根据列表ID显示初始数据
  var findAllTodos = function() {
      MenuService.findGroupName($stateParams.groupId).then(function(group) {
        $scope.groupName = group[0].title;// 列表名
      });
      if ($stateParams.groupId != -2) {
        TodoListService.findByGroupId($stateParams.groupId, 1).then(function(todolists) {
          $scope.todolists = todolists;// 未完成任务
        });
      }
      TodoListService.findByGroupId($stateParams.groupId, 2).then(function(todolists) {
        $scope.todolists_finish = todolists;// 已完成任务
      });
  };
  findAllTodos();

  // "添加"按钮Event
  $scope.add = function() {
    $state.go('app.todoinfo', { });
  };

  // "搜索"Event
  $scope.search = function() {
    $state.go('app.search', { });
  };

  // "排序"Event
  var nonePopover = function() {
    for (var i = 1; i <= 10; i++) {
        var p = angular.element(document.querySelector('#nspopover-' + i ));
        p.css('display', 'none');
    }
  };
  $scope.sort = function() {
    nonePopover();
    $ionicActionSheet.show({
     buttons: [
       { text: '按<b>日期</b>排序' },
       { text: '按<b>标题</b>排序' },
       { text: '按<b>重要度</b>排序' }
     ],
     cancelText: '关闭',
     cancel: function() {
       return true;
     },
     buttonClicked: function(index) {
       var sortKey="";
       switch ( index ) {
          case 0: sortKey="date";break;
          case 1: sortKey="title";break;
          case 2: sortKey="importance";break;
          default: sortKey="id";
       }
       TodoListService.findByGroupId($stateParams.groupId, 1, sortKey).then(function(todolists) {
         $scope.todolists = todolists;// 未完成
       });
       return true;
     }
   });
  };

  // 点击Listview跳转到任务详细页面
  $scope.show = function(todoid,type) {
    $state.go('app.todoinfo', { id: todoid });
  };

  // 点击Listview中的Checkbox结束当前任务
  $scope.finish = function(todoid, $event) {
    // TODO
    $event.stopPropagation();
  };

  // 长按Listview跳转到任务批量处理页面
  var element = angular.element(document.querySelector('#todolist'));
  $ionicGesture.on("hold", function (event) {
      $state.go('app.todolistedit', { groupId: $stateParams.groupId });
  }, element);

});