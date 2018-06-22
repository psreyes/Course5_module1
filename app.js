(function() {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('MyFirstController', function($scope) {
		$scope.string = "";
		

		$scope.evalua = function() {
			
			//console.log(calculateNumericForString($scope.string));//
			var hacerlista = Hacerlista($scope.string);

			
			
		}


		function Hacerlista(string) {
			var lista = $scope.string.split(',');
			var numeric = calculateNumericForString($scope.string);

				function calculateNumericForString(string) {
		    	var totalStringValue = 0;
		    	for (var i = 0; i < string.length; i++) {
		      	totalStringValue += string.charCodeAt(i);
      				//$scope.numeric = totalStringValue;//
    			}

    			return totalStringValue;
    			
  				}

			if (lista.length > 3) {
				$scope.text = "Too much";
				return $scope.text;
			 }
			if (numeric == 0) {
			 	$scope.text = "Please, enter data first"
			 	return $scope.text;
			 }
			else {
				$scope.text = "Enjoy!";
				return $scope.text;
			}
		}

		

		
	});
	
	})();

	/*(function() {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('MyFirstController', function($scope) {
		$scope.string = "";
		

		$scope.evalua = function() {
			console.log($scope.string);
		}

		
	});
	
	})();*/