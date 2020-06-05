document.addEventListener("DOMContentLoaded",
  function(event){
 	    var url="https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";
      ajaxUtils.sendGetRequest(url,
        function(res){

          var resquestAccepted=JSON.parse(res);
          console.log(resquestAccepted['regionData'][0]['region']);
     });
});   

 