angular.module('ng-dashboard')

.controller('TasksController', ['$scope', function($s){
	$s.tasks = [{name: 'test', date: '', reminder: 'reminder', done: false}];
	
	$s.addTask = function(name, dateDoneBy, reminderTime) {
		$s.tasks.push({
			name: name,
			date: dateDoneBy,
			reminder: undefined || reminderTime,
			done: false
		})
	};

	$s.taskToggle = function(task) {	
		if ($s.tasks[task].done === true) {
			$s.tasks[task].done = false;
		} else {
			$s.tasks[task].done = true;
			angular.element($s.tasks[task]).addClass('taskDone')
		}
	}
}])