app.controller('QuotationStartProcessCtrl', function($scope, $controller, $anchorScroll) {

	$controller('ProcessCtrl', {$scope: $scope});

	$scope.init = function(){
		$scope.process = "quotation";
		$scope.data = { product: [{}]};
		$anchorScroll();
	};

	$scope.addCar = function(){
		$scope.data.product.push({});
	};

});

app.controller('QuotationPrepareCtrl', function($scope, $controller) {

	$controller('TaskCtrl', {$scope: $scope});

});
