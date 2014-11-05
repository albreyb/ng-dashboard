angular.module('app.tasks', [])

.controller('TasksController', ['$scope', function($s){
	$s.task = {
		name: 'name',
		date: 'date',
		number: 'number',
	};
}])