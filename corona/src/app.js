(function(){
'use strict';

angular.module('CoronaApp',['ui.router']);

angular.module('CoronaApp')
//.controller('datacollectcontroller',datacollectcontroller)
.service('datacollectservice',datacollectservice)
.config(Routesconfig);


Routesconfig.$inject=['$stateProvider','$urlRouterProvider','$locationProvider'];
function Routesconfig($stateProvider,$urlRouterProvider,$locationProvider){
	$locationProvider.hashPrefix('!');
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl:"src/showdata.html",
		controller:datacollectcontroller,
		controllerAs:'ctrl',
		resolve:{
			wholedata:['datacollectservice',function(datacollectservice){
				return datacollectservice.getdata()
				.then(function(result){
						return result.data;
						});
				}]
			}
		})
	.state('home.child',{
		url:'/child/{itemid}',
		templateUrl:"src/showdataofstate.html",
		controller:datainsidestatecontroller,
		controllerAs:'ctrl2',
		resolve:{
					data:['$stateParams',function($stateParams){
							return $stateParams.itemid;
					     }]

				}
		});
}
 datacollectcontroller.$inject=['wholedata','$rootScope','$location','$anchorScroll','$state','$timeout'];
 function datacollectcontroller(wholedata,$rootScope,$location,$anchorScroll,$state,$timeout){
 	var ctrl=this;
 	ctrl.goto=function(input){
 		console.log("It m life");
 		$location.hash(input);
 		$anchorScroll();
 	};
 	ctrl.gotoBottom=function(inputState){
 		console.log("mmmm");
 		
 		//$state.go('home.child({itemid:state})');
 		var a={itemid:inputState};
 		$timeout(function(){
 			$anchorScroll('bottom');
 		},1000);
 		 $state.go("home.child",a);
 		//$location.hash('bottom');
 	}
 	ctrl.searchState="";
 	ctrl.data=wholedata;
 	ctrl.country={};
 	ctrl.country.total=0;
 	ctrl.country.active=0;
 	ctrl.country.recovered=0;
 	ctrl.country.deceased=0;
 	ctrl.listofstate={};
 	ctrl.states=[];
 	for(var state in ctrl.data){
 		ctrl.states.push(state);
 		ctrl.listofstate[state]={};
 		ctrl.listofstate[state].district=[];
 		ctrl.listofstate[state].active=0;
 		ctrl.listofstate[state].deceased=0;
 		ctrl.listofstate[state].recovered=0;
 		ctrl.listofstate[state].total=0;
 		ctrl.listofstate[state].istrue=false;
 		for(var dis in wholedata[state].districtData){
 				var disDetail={};
 				disDetail.name=dis;
 				disDetail.deceased=ctrl.data[state].districtData[dis].deceased;
 				disDetail.active=ctrl.data[state].districtData[dis].active;
 				disDetail.recovered=ctrl.data[state].districtData[dis].recovered;
 				disDetail.total=disDetail.deceased+disDetail.active+disDetail.recovered;
 				ctrl.listofstate[state].active += disDetail.active;
 				ctrl.listofstate[state].recovered += disDetail.recovered;
 				ctrl.listofstate[state].deceased += disDetail.deceased;
 				ctrl.listofstate[state].district.push(disDetail);
 				//ctrl.listofstate[state].district[dis]={};
 			}
 		ctrl.listofstate[state].total=ctrl.listofstate[state].recovered+ctrl.listofstate[state].active+ctrl.listofstate[state].deceased;
 		ctrl.country.total += ctrl.listofstate[state].total;
 		ctrl.country.active += ctrl.listofstate[state].active;
 		ctrl.country.recovered += ctrl.listofstate[state].recovered;
 		ctrl.country.deceased += ctrl.listofstate[state].deceased;
 	}
 	
 console.log(ctrl.country);	
 	
 	
 }
datainsidestatecontroller.$inject=['data','wholedata'];
function datainsidestatecontroller(data,wholedata){
	var ctrl=this;

	ctrl.districtlist=[];
	ctrl.state=data;
	console.log(ctrl.state);
		for(var dis in wholedata[ctrl.state].districtData){
			var disDetail={};
 				disDetail.name=dis;
 				disDetail.deceased=wholedata[ctrl.state].districtData[dis].deceased;
 				disDetail.active=wholedata[ctrl.state].districtData[dis].active;
 				disDetail.recovered=wholedata[ctrl.state].districtData[dis].recovered;
 				disDetail.total=disDetail.deceased+disDetail.active+disDetail.recovered;
 				ctrl.districtlist.push(disDetail);
		}
	ctrl.search=function(){
		 ctrl.districtlist=[];
		// ctrl.state=ctrl.state[0].toUpperCase()+ctrl.state.slice(1).toLowerCase();
		console.log(ctrl.state);
		for(var dis in wholedata[ctrl.state].districtData){
			var disDetail={};
 				disDetail.name=dis;
 				disDetail.deceased=wholedata[ctrl.state].districtData[dis].deceased;
 				disDetail.active=wholedata[ctrl.state].districtData[dis].active;
 				disDetail.recovered=wholedata[ctrl.state].districtData[dis].recovered;
 				disDetail.total=disDetail.deceased+disDetail.active+disDetail.recovered;
 				ctrl.districtlist.push(disDetail);
		}
	}

}

datacollectservice.$inject=['$http'];
function datacollectservice($http){
	var service=this;
	service.getdata=function(){
	return $http({
		method:"GET",
		url:"https://api.covid19india.org/state_district_wise.json"
	});
	}
}



})();