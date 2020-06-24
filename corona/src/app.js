(function(){
'use strict';

angular.module('CoronaApp',['ui.router']);

angular.module('CoronaApp')
//.controller('datacollectcontroller',datacollectcontroller)
.service('datacollectservice',datacollectservice)
.config(Routesconfig);


Routesconfig.$inject=['$stateProvider','$urlRouterProvider'];
function Routesconfig($stateProvider,$urlRouterProvider){
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
		url:'/home/insidestate',
		templateUrl:"src/showdataofstate.html",
		// controller:datainsidestatecollectcontroller,
		// controllerAs:'ctrl2',
		});
}
 datacollectcontroller.$inject=['wholedata'];
 function datacollectcontroller(wholedata){
 	var ctrl=this;
 	ctrl.data=wholedata;
 	console.log(wholedata);
 	ctrl.listofstate={};
 	ctrl.states=[];
 	for(var state in ctrl.data){
 		ctrl.states.push(state);
 		ctrl.listofstate[state]={};
 		ctrl.listofstate[state].district=[];
 		ctrl.listofstate[state].istrue=false;
 	}
 	
 	
 	ctrl.search=function(state){
 		if(ctrl.listofstate[state].istrue===true){
 			ctrl.listofstate[state]={};
 			ctrl.listofstate[state].district=[];
 			ctrl.listofstate[state].istrue=false;
 		}
 		else{
 			ctrl.listofstate[state].istrue=true;
 			for(var dis in wholedata[state].districtData){
 				var disDetail={};
 				disDetail.name=dis;
 				disDetail.deceased=ctrl.data[state].districtData[dis].deceased;
 				disDetail.active=ctrl.data[state].districtData[dis].active;
 				disDetail.recovered=ctrl.data[state].districtData[dis].recovered;
 				disDetail.total=disDetail.deceased+disDetail.active+disDetail.recovered;

 				ctrl.listofstate[state].district.push(disDetail);
 				//ctrl.listofstate[state].district[dis]={};
 			}
 		}
 		 console.log(ctrl.listofstate);

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