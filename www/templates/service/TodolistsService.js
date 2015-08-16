angular.module('TodolistsAPP', []).factory('TodoListService', function ($q, dummyData) {
    return {
        findByGroupId: function (groupId, status, sortKey) {
            var deferred = $q.defer();
            var results = dummyData.todos.filter(function(element) {
                if (groupId == -1) {
                    return parseInt(status) === element.status;
                }
                if (groupId == -2) {
                    return 2 === element.status;
                }
                if (groupId == -3) {
                    return Date.today().equals(Date.parse(element.date, "yyyy/MM/dd"))
                            && parseInt(status) === element.status;
                }
                return parseInt(groupId) === element.groupId 
                        && parseInt(status) === element.status;
            });
            var results = results.sort(function(a, b){
               switch ( sortKey ) {
                  case "date": 
                    return a.date > b.date;
                  case "title": 
                    return a.title > b.title;
                  case "importance": 
                    return parseInt(b.importance) - parseInt(a.importance);
                  default: 
                    return parseInt(a.id) - parseInt(b.id);
               }
            });
            deferred.resolve(results);
            return deferred.promise;
        },
        findByTitle: function (titleKey) {
            var deferred = $q.defer();
            var results = dummyData.todos.filter(function(element) {
                return element.title.indexOf(titleKey) == -1 ? false : true;
            });
            deferred.resolve(results);
            return deferred.promise;
        }
    }
})