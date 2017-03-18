

app.controller('RegistrationReviewCtrl', function($scope, $controller) {

	$controller('TaskCtrl', {$scope: $scope});

});

app.controller("RegistrationVerifyCtrl", function($scope, $controller){

	$controller('TaskCtrl', {$scope: $scope});
	
});