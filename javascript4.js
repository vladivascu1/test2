
function ChangeColour()
{

	var bodyc = document.querySelector("body");
	bodyc.style.backgroundColor ="#800000";
	bodyc.style.color = "#4ddbff";

	var subt = document.getElementsByClassName("subtitle");

	for(let i=0; i<subt.length; i++) { 
  		subt[i].style.color="#ffc61a";
}

	var imgfilm = document.getElementById("colorfilmexample");
	imgfilm.src = "Color_film.jpg";

	var toplink = document.querySelectorAll("a");
	

	for (let i = 0; i < toplink.length; i++) {
  		toplink[i].style.color = "#b3f0ff";
}



	var head = document.getElementsByTagName("HEADER")[0];
    head.style.backgroundImage= "url(colorbg.png";



	var borders = document.querySelectorAll("p:nth-of-type(2n)");
		for (let i = 0; i < borders.length; i++) {
  		borders[i].style.color = "lime";
}


	var info = document.getElementById("soundinfo");
	info.style.color="lime";
	info.style.border = "thin solid #ffc61a";



}

var isPlaying = false;

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 83) {
    
  	if(isPlaying==false)
  	{
    document.getElementById('audio').play();
    isPlaying = true;
  	}
  	else
  	{
  		document.getElementById('audio').pause();
  		isPlaying=false;

  	}
  }
});


function port(){
let bodyc = document.querySelector("body");
let subts = document.getElementsByClassName("subtitle");
let par   = document.querySelectorAll("p");


let prop1 = window.getComputedStyle(bodyc, null).getPropertyValue("background-color");
let prop2 = window.getComputedStyle(subts[0], null).getPropertyValue("color");
let prop3 = window.getComputedStyle(par[0], null).getPropertyValue("color");
let prop4 = window.getComputedStyle(par[1], null).getPropertyValue("color");

alert('Culoarea fundalului : ' + prop1 + '\nCuloarea subtitlurilor : ' + prop2 + '\nCuloarea paragrafelor de paritate para : ' + prop3 + '\nCuloarea paragrafelor de paritate impara : ' + prop4 );
}