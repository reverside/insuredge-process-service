app.controller('QuotationStartCtrl', function($scope, $controller) {

	$controller('TaskCtrl', {$scope: $scope});
	
	$scope.task = {
		data: {
			product: [{}]
		}	
	};
	
	$scope.init = function(){
		console.log("Hello");
	};

});

app.controller('QuotationPrepareCtrl', function($scope, $controller) {

	$controller('TaskCtrl', {$scope: $scope});

});
