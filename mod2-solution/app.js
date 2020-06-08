(function () {
'use strict';
var tobuy=[
{
   name:"cookie",
   quantity:"10"
},
{
   name:"Gulab Jamun",
   quantity:"20"
},
{
   name:"Samosa",
   quantity:"5"
},
{
   name:"burger",
   quantity:"3"
},
{
   name:"pizza",
   quantity:"7"
}
];
var check1={
  empty:false
};
var check2={
  empty:true
};
var boughtAlready=[];
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var buy=this;
    buy.tobuy=tobuy;
    buy.check=check1;
    buy.buttonpressed=function(index){
        ShoppingListCheckOffService.addToBought(index);
        ShoppingListCheckOffService.removeFromToBuy(index);
        };            

 
}
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought1=this;
    bought1.boughtAlready=boughtAlready;
    bought1.check=check2;
 
}

function ShoppingListCheckOffService(){
    var service=this;
    service.addToBought=function(index){
        var newItem={
            name:tobuy[index].name,
            quantity:tobuy[index].quantity
        };
        boughtAlready.push(newItem);
        if(boughtAlready.length!==0){
          check2.empty=false;

        }
    };
    service.removeFromToBuy=function(index){
        tobuy.splice(index,1); 
        if(tobuy.length===0){
            check1.empty=true;
        }   
    };


}



})();
