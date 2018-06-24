(function() {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

		LunchCheckController.$inject = ['$scope'];

		function LunchCheckController($scope) {

		$scope.string = "";
		

		$scope.evalua = function() {
			
			//console.log(calculateNumericForString($scope.string));//
			var hacerlista = Hacerlista($scope.string);
	
		}


		function Hacerlista(string) {
			
			//var stringtrimed = $scope.string.trim();
			//var stringsplited = stringtrimed.split(',');
			//var lista = stringsplited

			//console.log(lista);
			
			//var lista = $scope.string.split(','); 
			
			var numeric = calculateWordsWithoutSpace($scope.string);

				function calculateWordsWithoutSpace(string) {
		    	var totalWordsValue = 0;
		    	var array = string.split(',');
		    	for (var i = 0; i < array.length; i++) {
		      	if(array[i] != 0) {totalWordsValue += 1;};
      				//$scope.numeric = totalStringValue;//
    			}

    			return totalWordsValue;

  				}

			if (numeric > 3) {
				$scope.text = "Too much!";
				return $scope.text;
			 }
			else if (numeric == 0) {
			 	$scope.text = "Please, enter data first"
			 	return $scope.text;
			 }
			else {
				$scope.text = "Enjoy!";
				return $scope.text;
			}
		}
		
	};
	
	})();