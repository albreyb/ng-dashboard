angular.module('ng-dashboard', [
	'ui-router',
	'app.tasks',
])

.config(['$stateProvider', function($stateProvider){
	$stateProvider.state('app', {
		template: "<div ui-view></div>",
		abstract: true,
	});
}])