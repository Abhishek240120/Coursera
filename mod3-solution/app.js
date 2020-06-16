(function(){ 
'use strict';
angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItems)
;
 function FoundItems(){
	var ddo={
		templateUrl:"list.html",
		scope:{
			foundList:'<foundList',
			onRemove: '&'
		}

	};
	return ddo;
}

var items=[];
MenuSearchService.$inject=['$http'];
function MenuSearchService($http){
	var service=this;
	service.getMatchedMenuItems=function(input){
		return  $http({
			method:"GET",
			url:" https://davids-restaurant.herokuapp.com/menu_items.json"
		}).then(function(result){
			var res=result.data.menu_items;
			var foundItems=[];
			for(var a in res){
				if(res[a].description.toLowerCase().indexOf(input.toLowerCase()) !== -1){
					foundItems.push(res[a]);
					
			   	}
			}
			
			return foundItems;
		},function(error){
			console.log(error);
        });
         
	}
}
NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var controller=this;
	controller.input="";
	controller.showMenuItem=function(){
		controller.found=[];
		controller.notfound=false;
		if(controller.input.length<1){
           console.log("Nothing found");
           controller.notfound=true;
		}
		else{
		var promise=MenuSearchService.getMatchedMenuItems(controller.input);
		 promise.then(function(response){
		 	if(response.length<1){
		 		console.log("Nothing found");
		 		controller.notfound=true;
		 	}
		 	else{
		 	for(var i=0;i<response.length;i++){
		 		controller.found.push(response[i]);
            }
        	}
		})
		.catch(function(error){
			console.log("something went wrong");
		});
		}
	    
	};
	controller.removeItem = function (itemIndex) {
    	controller.found.splice(itemIndex,1);
    	
  };

}

})();