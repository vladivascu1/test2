
function ChangeColour()
{

	var bodyc = document.querySelector("body");
	bodyc.style.backgroundColor ="#800000";
	bodyc.style.color = "#4ddbff";

	var subt = document.getElementsByClassName("subtitle");

	for(var i=0; i<subt.length; i++) { 
  		subt[i].style.color="#ffc61a";
}

	var imgfilm = document.getElementById("colorfilmexample");
	imgfilm.src = "Color_film.jpg";

	var toplink = document.querySelectorAll("a");
	

	for (var i = 0; i < toplink.length; i++) {
  		toplink[i].style.color = "#b3f0ff";
}



	var head = document.getElementsByTagName("HEADER")[0];
    head.style.backgroundImage= "url(colorbg.png";



	var borders = document.querySelectorAll("p:nth-of-type(2n)");
		for (var i = 0; i < borders.length; i++) {
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
