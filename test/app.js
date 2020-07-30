(function(){

'use strict';

angular.module('myApp', [])
.controller('MyCtrl',Myctrl)
.service('service',service);


function Myctrl(service) {
   var ctrl=this;
   ctrl.username=""	
   ctrl.myWelcome='';
   ctrl.password='';
   ctrl.city='';
   ctrl.name='';
   ctrl.login=function(){
      service.login(ctrl.username,ctrl.password).then((res)=>{
         console.log(res.data.status)
         	ctrl.myWelcome=res.data.status;         
   	      console.log(ctrl.myWelcome);
      },(err)=>{
         ctrl.myWelcome="Either your password or username is incorrect";
      	console.log(err);
      });
      console.log("here",ctrl.myWelcome);
   }
   ctrl.signup=function(){
      service.signup(ctrl.username,ctrl.password,ctrl.name,ctrl.city).then((res)=>{
         console.log(res);
         ctrl.myWelcome=res.data.status;
      },(err)=>{
         console.log(err);
      });
   }
}
function service($http){
	var service=this;
	  service.login=function(username,password){
	  return $http.post("https://engquot.herokuapp.com/users/login",{
              "username":username,
              "password":password
           });
	   }
      service.signup=function(username,password,name,city){
        return $http.post("https://engquot.herokuapp.com/users/signup",{
              "username":username,
              "password":password,
              "name":name,
              "city":city
           });
     }
}




})();