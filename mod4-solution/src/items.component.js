(function(){

angular.module('MenuApp')
.component('items',{
	controller:itemComponentController,
	templateUrl:'src/items.html',
	bindings:{
		items:'<',
		category:'@'
	}
});
itemComponentController.$inject=[];
function itemComponentController(){

    //console.log($ctrl.category);
}

})();