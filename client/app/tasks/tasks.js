angular.module('app.tasks', [])

.config(['$stateProvider',function($sp){
	
		$sp.state('app.tasks', {
			templateUrl: './app/tasks/tasks.html'
		});

}])