angular.module('MenuServiceAPP', []).factory('MenuService', function ($q, dummyData) {
  return {
    findAll: function (display) {
        var deferred = $q.defer();
        var results = dummyData.menus.filter(function(element) {
            if (display === undefined) {
                return true;
            } else {
                return display === element.display;
            }
        });
        deferred.resolve(results);
        return deferred.promise;
    },
    findGroupName: function(groupId) {
        var deferred = $q.defer();
        var results = dummyData.menus.filter(function(element) {
            return parseInt(groupId) === element.groupId;
        });
        deferred.resolve(results);
        return deferred.promise;
    }
  }
})