var todoApp = angular.module("todoApp", []);

function TasksCtrl($scope) {
	if(JSON.parse(localStorage.getItem("todoTasks"))) {
		$scope.tasks = JSON.parse(localStorage.getItem("todoTasks"));
	} else {
		$scope.tasks = [];	
		localStorage.setItem("todoTasks", JSON.stringify($scope.tasks));
	}
	
	/*	{name: 'Learn to ride a unicycle', date:undefined, done:false},
		{name: 'Workout after 5', date:undefined, done:false},
		{name: 'Finish homework', date:undefined, done:false},*/

	$scope.addTask = function() {
		if($scope.inputTask) {
			$scope.tasks.push({name: $scope.inputTask, date: undefined, done:false});
			localStorage.setItem("todoTasks", JSON.stringify($scope.tasks));
			$scope.inputTask = '';
		}
	};

	$scope.delTask = function(index) {
		delete $scope.tasks.splice(index, 1);
		localStorage.setItem("todoTasks", JSON.stringify($scope.tasks));
	};

	$scope.delChecked = function () {
        var newTasks = [];
        for (var i = 0; i < $scope.tasks.length; i++) {
        	if(!$scope.tasks[i].done) {
        		newTasks.push($scope.tasks[i]);
        	}
        };
        $scope.tasks = newTasks;
        localStorage.setItem("todoTasks", JSON.stringify($scope.tasks));
    };

	$scope.delAll = function() {
	if(confirm("Are you sure you want to delete all your tasks?")==true)
		$scope.tasks = [];
		localStorage.setItem("todoTasks", JSON.stringify($scope.tasks));
	};

	$scope.setDone = function(index) {
		$scope.tasks[index].done = !($scope.tasks[index].done);
		localStorage.setItem("todoTasks", JSON.stringify($scope.tasks));
	};
	
	$scope.isNotChecked = function() {
		for (var i = 0; i < $scope.tasks.length; i++) {
        	if($scope.tasks[i].done) {
        		return false;
        	}
        };
		return true;
	}
}
