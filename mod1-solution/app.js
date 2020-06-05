(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', lunchController);

lunchController.$inject = ['$scope'];
function lunchController($scope) {
  $scope.name = "";
  $scope.check=function(){
     var m1="Enjoy!";
     var m2="Too much!";
     var m3="Please enter data first";
     var inputList=($scope.name).toString();
     if(inputList.length===0){
     	$scope.message=m3;
     }
     else
     {
     	var listOfDishes=($scope.name).toString().split(',');
     	if(listOfDishes.length > 3){
     		$scope.message=m2;
     	}
     	else{
     		$scope.message=m1;

     	}
     }

  };
 
}

})();
