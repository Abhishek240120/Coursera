(function () {
"use strict";

angular.module('public')
.controller('infoController',infoController);

infoController.$inject=['saveDataService'];
function infoController(saveDataService){
	var ctrl=this;
	ctrl.fav=saveDataService.retrieve();
	console.log(ctrl.fav);
	ctrl.isdataPresent=Object.keys(ctrl.fav).length;
}

})();