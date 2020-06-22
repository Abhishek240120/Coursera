(function(){

angular.module('MenuApp')
.component('categories',{
	controller:categoryComponentController,
	templateUrl:'src/categories.html',
	bindings:{
		items:'<'
	}
});
categoryComponentController.$inject=[];
function categoryComponentController(){
	var $ctrl=this;
    
}

})();