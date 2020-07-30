(function(){

'use strict';

angular.module('myApp', [])
.controller('MyCtrl',Myctrl)
.service('service',service)
.controller('MyCtrl2',MyCtrl2);

var token;
function Myctrl(service,$http) {
   var ctrl=this;
   ctrl.username=""	
   ctrl.myWelcome='';
   ctrl.password='';
   ctrl.city='';
   ctrl.name='';
   ctrl.loggedinAs='';
   ctrl.loggedIn=false;

   ctrl.login=function(){
      service.login(ctrl.username,ctrl.password).then((res)=>{
         console.log(res.data)
         ctrl.loggedinAs=res.data.user.username;
          token = res.data.token;
         ctrl.loggedIn=true;
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
         ctrl.myWelcome="Denied !";
      });
   }


}

function MyCtrl2(service,$http){
  var ctrl=this;
  ctrl.comment="";
  ctrl.message="";
  ctrl.refreshPost=function(){
    ctrl.comment="";
    ctrl.message="";
  }
  ctrl.commentpost=function(){
    console.log("In here");
    service.postcomment(ctrl.comment).then((res)=>{
      ctrl.message="posted !";
    console.log(res);
    },(err)=>{
      console.log(err);
      ctrl.message="error occurred !";
    });
  }

  ctrl.refresh=function(){
    $http.get("https://engquot.herokuapp.com/comments").then((res)=>{
       ctrl.comments=res.data;
       console.log(ctrl.comments[0].comment);
     },(err)=>{
       console.log(err);
     });
  }
  ctrl.refresh();



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
     service.postcomment=function(comment){
        return $http({
          method:"POST",
          url:"https://engquot.herokuapp.com/comments",
          headers:{
            Authorization:"Bearer "+token
          },
          data:{
            comment:comment
          }
          
          
          });
          
     }
}




})();