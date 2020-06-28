(function () {
"use strict";

angular.module('public')
.controller('signUpController', signUpController)
.service('favMenuItemService',favMenuItemService)
.service('saveDataService',saveDataService);
signUpController.$inject = ['favMenuItemService','saveDataService'];
function signUpController(favMenuItemService,saveDataService) {
  var $ctrl = this;
  $ctrl.message="";
  $ctrl.user={};
  $ctrl.userData={};
  $ctrl.submitForm=function(){
  var promise=favMenuItemService.getItemDetail($ctrl.user.favShortname);
  promise.then(function(result){
  	$ctrl.message="Your information has been saved";
  	$ctrl.userData.userInfo=$ctrl.user;
  	$ctrl.userData.userFavDish=result.data;
  	saveDataService.save($ctrl.userData);
  },function(error){
  	$ctrl.message="No such menu number exists";
  });
  	
  }
}
favMenuItemService.$inject=['$http'];
function favMenuItemService($http){
	var service=this;
	service.getItemDetail=function(item){
		return $http({
  		method:'GET',
  		url:("https://abhi240120.herokuapp.com/menu_items/"+item+".json")
	  	});
	}
}
saveDataService.$inject=[];
function saveDataService(){
	var service=this;
	service.savedData={};
	service.save=function(data){
		service.savedData=data;
		console.log('data saved');
	}
	service.retrieve=function(){
		return service.savedData;
	}

}

})();