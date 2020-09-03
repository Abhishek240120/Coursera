(function(){

'use strict';

angular.module('newsFeedApp',['ui.router']);

angular.module('newsFeedApp').config(RoutesConfig);
RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/index.html');
	console.log("Yaha tak to aaye");
	$stateProvider
	.state('home',{
		url:'/index.html',
		templateUrl:'js/homeview.html',
		controller:HomeController,
		controllerAs:"ctrl"
	})
	.state('uniqueNews',{
		url:'/index.html/unique.html',
		templateUrl:"js/uniqueView.html"
	});
}

function HomeController($state,$http){
	var ctrl=this;
	ctrl.send=function(id){
		console.log("Hi I am there!"+id);
		$http.get("https://fathomless-garden-35476.herokuapp.com/news").then((res)=>{
			console.log(res);
		},(err)=>{
			console.log(err);
		})
		$state.go("uniqueNews");
		
	}
	ctrl.topnews=[{"id":"0209201","heading":"Pubg Ban In India"},{"id":"0209201","heading":"Pubg Ban In India"},{"id":"0209201","heading":"Pubg Ban In India"},{"id":"0209201","heading":"Pubg Ban In India"},{"id":"0209201","heading":"Pubg Ban In India"}];
}
})();