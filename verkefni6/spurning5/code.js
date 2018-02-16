function answer(){
	var svar = document.createElement("p");
	svar.setAttribute("id","svar");
	var svarText = document.createTextNode("Svarið er 3");
	svar.appendChild(svarText);
	document.body.appendChild(svar);

	document.getElementById("spurning").innerHTML = "Quick Maths?";
	document.getElementById("1").innerHTML = "Hella quick maths";
	document.getElementById("2").innerHTML = "Ye";
	var x = document.getElementById("3");
	x.parentNode.removeChild(x);
	var y = document.getElementById("4");
	y.parentNode.removeChild(y);

	var x = getElementById("1");
	x.onclick = function() {svar2()}
}

function svar2(){
	document.getElementById("svar").innerHTML = "Svarið er Hella quick maths";
}