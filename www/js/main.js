require.config({
	baseUrl:"",
	// alias libraries paths.  Must set 'angular'
	paths:{
		    'angular': 'lib/ionic/js/angular/angular',
		    'angularAMD':'js/angularAMD',
	     	'date':'lib/datejs/date',
	     	'ionicBundle':'lib/ionic/js/ionic.bundle',
	     	'nsPopover':'lib/nsPopover/nsPopover',
	     	'ngCordova':'lib/ngCordova/dist/ng-cordova',
	     	'cordova':'cordova',
	     	'app':'js/app'
	},
	 // Add angular modules that does not support AMD out of the box, put it in a shim
	shim:{
		'angularAMD':['angular'],
		'ionicBundle':['angularAMD'],
		'nsPopover':['ionicBundle'],
		'ngCordova': ['nsPopover'],
		'cordova': ['ngCordova'],
		'app':['cordova']
	},
	 // kick start application
	 deps: ['app']
});
