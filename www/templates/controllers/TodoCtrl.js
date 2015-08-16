angular.module('TodoAPP', [])
.controller('TodoCtrl', function($scope, $state, $stateParams, $ionicActionSheet, $ionicActionSheet) {
  // 任务ID（非空编辑，空的话新建）
  var todoid = $stateParams.todoId;

  $scope.mode = "text";
  $scope.title = "任务（文本）";
  $scope.newItem = '';
  $scope.priority_level = 0;
  $scope.todo_date = Date.today();

  // For test
  $scope.items = [
    {title: '牛奶2盒'},
    {title: '鸡蛋3个'},
    {title: '面包1包'}];
  $scope.images_list = ["img/001.jpg", "img/002.jpg", "img/003.jpg", "img/004.jpg"];

  var nonePopover = function() {
    for (var i = 1; i <= 10; i++) {
        var p = angular.element(document.querySelector('#nspopover-' + i ));
        p.css('display', 'none');
    }
  };

  // "切换模式"Event
  $scope.gotoTextMode = function() {
    nonePopover();
    $scope.mode = "text";
    $scope.title = "任务（文本）";
  };
  $scope.gotoListMode = function() {
    nonePopover();
    $scope.mode = "list";
    $scope.title = "任务（清单）";
  };

  // "添加附件"Event
  $scope.addAttachment = function() {
    nonePopover();
    $ionicActionSheet.show({
     buttons: [
       { text: '相机' },
       { text: '图库' }
     ],
     cancelText: '关闭',
     cancel: function() {
       return true;
     },
     buttonClicked: function(index) {
       alert("ddd");
       return true;
     }
   });
  };

  $scope.priority = function($event) {
    $event.stopPropagation();
  };

  // "设置重要度"Event
  $scope.setPriority = function(p) {
    $scope.priority_level = p;
    nonePopover();
  };

  // "设置时间"Event
  $scope.deadline = function() {
    var options = {
      date: $scope.todo_date,
      mode: 'date'
    };
    datePicker.show(options, function(d) {
      if (!isNaN(d.getTime())) {  // valid date
	    alert(d.getTime());
        $scope.$apply(function () {
          alert(d);
          $scope.todo_date = d;
        });
      }
    });
  };

  // "清单模式下回车添加子任务"Event
  $scope.handleKeydown = function(e, newItem) {
    if (e.which == 13) {
      $scope.items.push({title: newItem});
      $scope.newItem = '';
      e.preventDefault();
    }
  };
});