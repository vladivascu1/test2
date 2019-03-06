var indexImg = 0;
var myImages=["img1.jpg","img2.gif","img3.gif","img4.jpg"];
var myText=["A scene from <i>A Trip to the Moon</i> (1902) by Georges Méliès.", "The two scenes making up <i>Come Along, Do!</i>", "The first two shots of <i>As Seen Through a Telescope </i>(1900), with the telescope POV simulated by the circular mask.", "Still from <i>The Great Train Robbery</i>, produced by Edwin S. Porter."];

window.onload = function(){

alert("Pagina s-a incarcat!Apasati pe imagine pentru a o schimba!");

var b = document.getElementById("currentImage");
b.onclick = function(){
b.src= myImages[indexImg];

var element = document.getElementById("currentText");
element.innerHTML = myText[indexImg];

  indexImg++;

if(indexImg==myImages.length)
indexImg=0;


}

}