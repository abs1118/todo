angular.module('MainAPP', []).controller('AppCtrl', function($scope, $state, MenuService) {

  // 初始化菜单项目
  var findDisplayMenus = function() {
    MenuService.findAll(true).then(function(menus) {
      $scope.menus = menus;
    });
  };
  findDisplayMenus();

  // "设置"按钮Event
  $scope.settings = function() {
    $state.go('app.settings', { });
  };

  // "添加列表"按钮Event
  $scope.addGroup = function() {
    $state.go('app.groupinfo', { });
  };

  // "编辑"按钮Event
  $scope.editGroup = function() {
    $state.go('app.grouplist', { });
  };
});