(function(){

angular.module('MenuApp').
controller('categoryController',categoryController);
categoryController.$inject=['categoryData'];
function categoryController(categoryData){
  var ctrl=this;
  ctrl.listofcategories=categoryData;
  console.log(ctrl.listofcategories);
}
})();