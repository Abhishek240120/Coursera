document.addEventListener("DOMContentLoaded",
  function(event){
 	    var url="https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";
      ajaxUtils.sendGetRequest(url,
        function(res){
          var i;
          var resquestAccepted=JSON.parse(res);
          console.log(resquestAccepted);
          for(i=1;i<=28;i++){
          var w1="#tableEntry"+i.toString()+"  div:nth-child(1)";
          var w2="#tableEntry"+i.toString()  +" div:nth-child(2)";
          var w3="#tableEntry"+i.toString()+"  div:nth-child(3)";
          var w4="#tableEntry"+i.toString()  +" div:nth-child(4)";
          var w5="#tableEntry"+i.toString()+"  div:nth-child(5)";
          document.querySelector(w1).textContent=resquestAccepted['regionData'][i-1]['region'];
          document.querySelector(w2).textContent=resquestAccepted['regionData'][i-1]['totalInfected'];
          document.querySelector(w3).textContent=resquestAccepted['regionData'][i-1]['recovered'];
          document.querySelector(w4).textContent=resquestAccepted['regionData'][i-1]['deceased'];
          document.querySelector(w5).textContent=resquestAccepted['regionData'][i-1]['totalCases'];
      }

     });
});   

 