angular.module('TutorialAPP', [])

// *******************
// 向导页面
// *******************
.controller('TutorialCtrl', function($scope, $state, $ionicViewService) {

  window.localStorage['didTutorial'] = false;// For Test

  var startApp = function() {
    $ionicViewService.clearHistory();
    // 默认进入“今天”的任务列表
    $state.go('app.todolist', {groupId: -3});
    window.localStorage['didTutorial'] = true;
  };

  if(window.localStorage['didTutorial'] === "true") {
    console.log('Skip intro');
    // 向导页面只显示一次
    startApp();
  } else {
    setTimeout(function () {
      navigator.splashscreen.hide();
    }, 750);
  }

  // "立即体验"按钮Event
  $scope.gotoMain = function() {
    startApp();
  };

  $scope.slideHasChanged = function(index) {
  };
});