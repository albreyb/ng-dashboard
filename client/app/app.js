angular.module('ng-dashboard', [
	'ui.router',
])

.config(['$stateProvider', function($stateProvider){
	
	$stateProvider
// HOME STATES AND NESTED VIEWS ==========================================
	.state('home', {
		url: '/home',
		templateUrl: "./tasks/tasksView.html",
		controller: "TasksController",
	})

// Projects/Tasks view
	.state('about', {

	})
}])