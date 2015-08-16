angular.module('SettingsAPP', []).controller('SettingsCtrl', function($scope, $stateParams) {

  $scope.showAbout = false;
  $scope.showBgcolor = false;

  // "设置背景"Event
  $scope.setBgcolor = function(index) {
    alert(index);
  };

});