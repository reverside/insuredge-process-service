var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    	.when("/home", {
	        templateUrl : "templates/home.html"
	    })
	    .when("/processes/quotation/start", {
	    	templateUrl: "templates/quotation/start.html",
	    	controller: "QuotationStartProcessCtrl"
	    })
	    .when("/tasks", {
	        templateUrl : "templates/tasks.html",
	        controller: "TasksCtrl"
	    })
	    .when("/tasks/registration/review/:taskId", {
	    	templateUrl: "templates/registration/review.html",
	    	controller: "RegistrationReviewCtrl"
	    })
	    .when("/tasks/registration/verify/:taskId", {
	    	templateUrl: "templates/registration/verify.html",
	    	controller: "RegistrationVerifyCtrl"
	    })
	    .when("/tasks/quotation/prepare/:taskId", {
	    	templateUrl: "templates/quotation/prepare.html",
	    	controller: "QuotationPrepareCtrl"
	    })
	    .otherwise("/home");
});

app.controller("ProcessCtrl", function($scope, $routeParams, $http,  $anchorScroll){

	$scope.process;

	$scope.data;

	$scope.start = function(){
		$http({
			url: '/api/processes/' + $scope.process,
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			data: $scope.data
		}).success(function(data, status){
			console.log("success!!!");
			$scope.reference = data;
			$scope.init();

		}).error(function(error){
			console.log("error");
		});
	};

});


app.controller('TasksCtrl', function($scope, $http, $routeParams) {

	$scope.userId ;

	$scope.init = function(){
		$scope.userId = $routeParams['userId'];

		$http({
			url: '/api/tasks' + '?userId=' + $scope.userId,
			method: "GET",
			headers: {
				'Accept': 'application/json'
			}
		}).success(function(data, status){
			console.log('success');
			$scope.taskList = data;
		}).error(function(error){
			console.log("error");
		});
	};

});



app.controller("TaskCtrl", function($scope, $routeParams, $http, $location){

	$scope.task;

	$scope.changed = function(){
		$scope.task.updated = true;
	};

	$scope.init = function(){
		console.log($routeParams.taskId);
		$http({
			url: '/api/tasks/' + $routeParams.taskId + '?userId=' + $routeParams['userId'],
			method: "GET",
			headers: {
				'Accept': 'application/json'
			}
		}).success(function(data, status){
			console.log('success');
			$scope.task = data;
			$scope.data = angular.copy($scope.task.data);
		}).error(function(error){
			console.log("error");
		});
	};

	$scope.claim = function(){
		$http({
			url: '/api/tasks/' + $routeParams.taskId + '?userId=' + $routeParams['userId'],
			method: "PATCH"
		}).success(function(data, status){
			console.log("success!!!");
			$scope.task.assignee = $routeParams['userId'];
		}).error(function(error){
			console.log("error");
		});
	};

	$scope.save = function(){
		$http({
			url: '/api/tasks/' + $routeParams.taskId + "?userId=" + $routeParams['userId'],
			method: "PUT",
			headers: {
				'Content-Type': 'application/json'
			},
			data: $scope.data
		}).success(function(data, status){
			console.log("success!!!");
			$location.path("/tasks");
		}).error(function(error){
			console.log("error");
		});
	};

	$scope.submit = function(){
		$http({
			url: '/api/tasks/' + $routeParams.taskId + "?userId=" + $routeParams['userId'],
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			data: $scope.data
		}).success(function(data, status){
			console.log("success!!!");
			$location.path("/tasks");
		}).error(function(error){
			console.log("error");
		});
	};

});




