var list = ["epli","banani","ananas","appelsína","gúrka"];
var item = "";

for (var i = 0; i < list.length; i++) {
	item += list[i] + "<br>";
}
document.getElementById('listi').innerHTML = item;