
var aDiv = document.getElementsByTagName('div');

for(var i=0;i<aDiv.length;i++){
	var a = aDiv[i];
	a.index = i;
	a.onclick = function (){
		alert("Hello aDiv["+this.index+"]");
	}
}
