(function () {
'use strict';

//angular.module('MenuApp',['ui.router','data']);

angular.module('MenuApp')
.config(RoutesConfig);
//.controller('categoryController',categoryController); 


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'src/home.html'
    })
    .state('categories',{
      url:'/categories',
      controller:categoryController,
      controllerAs:'ctrl',
      templateUrl:"src/categories1.html",
      resolve:{
        categoryData:['MenuDataService',function(MenuDataService){
                      return MenuDataService.getAllCategories()
                        .then(function(result){
                          console.log(result);
                            return result['data'];
                        });
                     }]
      }
    })
    .state('items',{
      url:'/items/{itemShortname}',
      controller:itemController,
      controllerAs:'ctrl',
      templateUrl:"src/items1.html",
      resolve:{
        itemData:['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
                      return MenuDataService.getItemsForCategory($stateParams.itemShortname)
                        .then(function(result){
                          console.log($stateParams)
                            return result['data'];
                            
                        });
                     }]
      }
    });

}
categoryController.$inject=['categoryData'];
function categoryController(categoryData){
  var ctrl=this;
  ctrl.listofcategories=categoryData;
  console.log(ctrl.listofcategories);
}
itemController.$inject=['itemData'];
function itemController(itemData){
  var ctrl=this;
  ctrl.category=itemData['category']['name'];
  ctrl.listofitems=itemData['menu_items'];
  console.log(itemData);
}
})();
