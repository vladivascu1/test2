
var fereastra;

function showref() {
  fereastra = window.open("", "References", "width=300,height=200");
  fereastra.document.write("<h1>References:</h1><p><a href ='https://en.wikipedia.org/wiki/History_of_film'>Wikipedia</a></p><p><a href='https://www.w3schools.com'>W3schools</a></p>");
}

function hideref() {
  fereastra.close();
}

window.onload = function(){

  window.allowDrop = function(ev) {
  ev.preventDefault();
}

window.drag = function(ev) {
  ev.dataTransfer.setData("sursanewshow", ev.target.src);
}

window.drop = function(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("sursanewshow");

 // ev.target.parentElement.style.backgroundImage = "url('"+ data + "')";
 // ev.target.parentElement.style.backgroundPosition = "center";
 // ev.target.parentElement.style.backgroundSize = "cover";

  var show = document.getElementById("showcase");
  show.style.backgroundImage = "url('"+ data + "')";
  show.style.backgroundPosition = "center";
  show.style.backgroundSize = "cover";


}

function CuloareAleatoare(){

	let r = Math.floor(Math.random()*255 + 1);
	let g = Math.floor(Math.random()*255 + 1);
	let b = Math.floor(Math.random()*255 + 1);

	let rez = 'rgb(' + r + ',' + g + ',' + b + ')';
	return rez;
}


var btn = document.getElementById("textcolbtn");
btn.onclick =function(){
	//event.stopPropagation();
  alert('S-a schimbat culoarea la ala mic');
	let text = document.getElementById("desch2");
	text.style.color = CuloareAleatoare();
}


var shw = document.getElementById("showcase");
shw.onclick =function(){

	let text = document.getElementById("desch1");
	text.style.color = CuloareAleatoare();
  alert('S-a schimbat culoarea la ala mare');	
}

var logo = document.getElementById("brand");


logo.onclick = function(){

let arr = "----";
let data = window.localStorage.getItem('ultimadataacces');

if(data!=null)
arr = data.split(" ");

alert('Ati accesat ultima oara la : \n' + 'Secunda : ' + arr[0] + '\nZiua : ' + arr[1] + '\nLuna : ' + arr[2] + '\nAnul : ' + arr[3]);

let dateobj = new Date();
let zi = dateobj.getDay();
let luna = dateobj.getMonth();
let an = dateobj.getFullYear();
let secunda = dateobj.getSeconds();

var datanoua = secunda + ' ' + zi + ' ' + luna + ' ' + an;

window.localStorage.setItem('ultimadataacces', datanoua);

}


}


