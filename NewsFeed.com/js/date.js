(function(window){
	var d=new Date();
	d=d.toString().split(" ");
	d=d[0]+" "+d[1]+" "+d[2]+" "+d[3];
	var elem = document.getElementById("showingDateAtTop");
	elem.innerHTML=d;
})(window);
