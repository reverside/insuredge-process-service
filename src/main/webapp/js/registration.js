
app.controller('RegistrationReviewCtrl', function($scope, $controller) {

	$controller('TaskCtrl', {$scope: $scope});

	$scope.init = function(){
		$scope.data = { product: [{}]};
	};

});

app.controller("RegistrationVerifyCtrl", function($scope, $controller){ $controller('TaskCtrl', {$scope: $scope});
	
});