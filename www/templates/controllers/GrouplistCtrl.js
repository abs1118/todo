angular.module('GrouplistAPP', []).controller('GrouplistCtrl', function($scope, $state, MenuService) {

  // 显示所有列表
  var findDisplayMenus = function() {
      MenuService.findAll().then(function(menus) {
        $scope.menus = menus;
      });
  };
  findDisplayMenus();

  // "删除列表"Event
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

});