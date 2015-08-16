define(['angularAMD','nsPopover'], 
function (angularAMD) {
var todo=angular.module('todo.io', ['ionic', 'nsPopover','ngCordova']);

todo.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

todo.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('tutorial', {
        url: '/',
        views:{
        	'':angularAMD.route({
        		templateUrl: 'templates/tutorial.html',
                controller: 'TutorialCtrl',
                controllerUrl:['templates/controllers/TutorialCtrl.js']
        	})
        }
     }).state('app', angularAMD.route({
      url: "/app",
      abstract: true,
      views:{
      	'':angularAMD.route({
      		templateUrl: "templates/menu.html",
            controller: 'AppCtrl',
            controllerUrl:['templates/controllers/AppCtrl.js']
      	})
      }
    })).state('app.todolist', angularAMD.route({
      url: "/todolist/:groupId",
      views: {
        'menuContent' :angularAMD.route({
          templateUrl: "templates/todo_list.html",
          controller: 'TodolistsCtrl',
          controllerUrl:['templates/controllers/TodolistsCtrl.js',
                         'js/filters.js',
                         'templates/service/MenuService.js',
                         'templates/service/dummyData.js',
                         'templates/service/TodolistsService.js',
                         ]
        })
      }
    })).state('app.todolistedit', angularAMD.route({
      url: "/todolist/edit/:groupId",
      views: {
        'menuContent' :angularAMD.route({
          templateUrl: "templates/todo_list_edit.html",
          controller: 'TodolistsEditCtrl',
          controllerUrl:['templates/controllers/TodolistsEditCtrl.js']
        })
      }
    })).state('app.todoinfo', angularAMD.route({
      url: "/todo/:todoId",
      views: {
        'menuContent' :angularAMD.route({
          templateUrl: "templates/todo_info.html",
          controller: 'TodoCtrl',
          controllerUrl:['templates/controllers/TodoCtrl.js']
        })
      }
    })).state('app.grouplist', angularAMD.route({
      url: "/group",
      views: {
        'menuContent' :angularAMD.route({
          templateUrl: "templates/group_list.html",
          controller: 'GrouplistCtrl',
          controllerUrl:['templates/controllers/GrouplistCtrl.js']
        })
      }
    })).state('app.groupinfo',angularAMD.route({
      url: "/group/:groupId",
      views: {
        'menuContent' :angularAMD.route({
          templateUrl: "templates/group_info.html",
          controller: 'GroupCtrl',
          controllerUrl:['templates/controllers/GroupCtrl.js']
        })
      }
    })).state('app.search', angularAMD.route({
      url: "/search",
      views: {
        'menuContent' :angularAMD.route({
          templateUrl: "templates/search.html",
          controller: 'SearchCtrl',
          controllerUrl:['templates/controllers/SearchCtrl.js']
        })
      }
    })).state('app.settings', angularAMD.route({
      url: "/settings",
      views: {
        'menuContent' :angularAMD.route({
          templateUrl: "templates/settings.html",
          controller: 'SettingsCtrl',
          controllerUrl:['templates/controllers/SettingsCtrl.js']
        })
      }
    }));

  $urlRouterProvider.otherwise('/');
});
return angularAMD.bootstrap(todo);
});
