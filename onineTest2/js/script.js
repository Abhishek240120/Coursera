document.addEventListener("DOMContentLoaded",
  function(event){

  	(function(global){
    var url=window.location.href.split("?");
    global.dataFile=url[1];
   })(window);

 (function(){
 	  var url="data/ques"+dataFile.toString()+".json";
      console.log(url);

      ajaxUtils.sendGetRequest(url,
        function(res){

          var resquestAccepted=JSON.parse(res);
          var increementer=0;
          console.log(resquestAccepted);
          for(ques in resquestAccepted){
          increementer+=1;
          var question="#ques"+increementer.toString()+" span";
          var option1="#q"+increementer.toString()+"op1";
          var option2="#q"+increementer.toString()+"op2";
          var option3="#q"+increementer.toString()+"op3";
          
          document.querySelector(question).textContent=resquestAccepted[ques]["ques"];
          document.querySelector(option1).textContent=resquestAccepted[ques]["op1"];
          document.querySelector(option2).textContent=resquestAccepted[ques]["op2"];
          document.querySelector(option3).textContent=resquestAccepted[ques]["op3"];
                 }
     });
})();   

});  
var arr=new Array();
for(var a=0;a<11;a++)
{
	arr[a]=[-1,-1,-1,-1];
}
function enterResult(i,j){
	if(arr[i][j]===-1){
	arr[i][j]=1;
    }
    else{
    	arr[i][j]=-1;
    }
}        
function submit(){
	var ans="";
	for(var a=0;a<11;a++){
		  var flag=0;
          for(var b=0;b<4;b++){
          	if(arr[a][b]==1){
          		ans+=b.toString();
          		flag=1;
          		break;
          	}
          }
          if(flag==0){
          		ans+="0";
          	}
	}
	document.location("result.html?"+ans+"?"+dataFile);
}