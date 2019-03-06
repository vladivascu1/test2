     

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


window.onload = function(){

  
  var btn =  document.getElementById("showmore");
  var text = [ 'The Lucas–Spielberg combine would dominate "Hollywood" cinema for much of the 1980s, and lead to much imitation. Two follow-ups to Star Wars, three to Jaws, and three Indiana Jones films helped to make sequels of successful films more of an expectation than ever before. Lucas also launched THX Ltd, a division of  The Lucas–Spielberg combine would dominate "Hollywood" cinema for much of the 1980s, and lead to much imitation. Two follow-ups to Star Wars, three to Jaws, and three Indiana Lucasfilm in 1982,[68] while Spielberg enjoyed one of the decade',
              'The Laaa combine would dominate "Hollywood" cinema for much of the 1980s, and lead to much imitation. Two follow-ups to Star Wars, three to Jaws, and three Indiana Jones films helped to make sequels of successful films more of an expectation than ever before. Lucas also launched THX Ltd, a division of  The Lucas–Spielberg combine would dominate "Hollywood" cinema for much of the 1980s, and lead to much imitation. Two follow-ups to Star Wars, three to Jaws, and three Indiana Lucasfilm in 1982,[68] while Spielberg enjoyed one of the decade',
              'The Lucbbbas–Spielberg combine would dominate "Hollywood" cinema for much of the 1980s, and lead to much imitation. Two follow-ups to Star Wars, three to Jaws, and three Indiana Jones films helped to make sequels of successful films more of an expectation than ever before. Lucas also launched THX Ltd, a division of  The Lucas–Spielberg combine would dominate "Hollywood" cinema for much of the 1980s, and lead to much imitation. Two follow-ups to Star Wars, three to Jaws, and three Indiana Lucasfilm in 1982,[68] while Spielberg enjoyed one of the decade',
              'The Lucaccs–Spielberg combine would dominate "Hollywood" cinema for much of the 1980s, and lead to much imitation. Two follow-ups to Star Wars, three to Jaws, and three Indiana Jones films helped to make sequels of successful films more of an expectation than ever before. Lucas also launched THX Ltd, a division of  The Lucas–Spielberg combine would dominate "Hollywood" cinema for much of the 1980s, and lead to much imitation. Two follow-ups to Star Wars, three to Jaws, and three Indiana Lucasfilm in 1982,[68] while Spielberg enjoyed one of the decade',
              'The Lucadds–Spielberg combine would dominate "Hollywood" cinema for much of the 1980s, and lead to much imitation. Two follow-ups to Star Wars, three to Jaws, and three Indiana Jones films helped to make sequels of successful films more of an expectation than ever before. Lucas also launched THX Ltd, a division of  The Lucas–Spielberg combine would dominate "Hollywood" cinema for much of the 1980s, and lead to much imitation. Two follow-ups to Star Wars, three to Jaws, and three Indiana Lucasfilm in 1982,[68] while Spielberg enjoyed one of the decade'
              ];

  btn.clicked = 0;
  btn.remaining = 5 - btn.clicked;
  btn.info1 = "Apasati butonul Show more pentru a citi mai multe paragrafe.";
  btn.info2 = "Nu mai sunt paragrafe de afisat!Pentru o lectura mai amanuntita,accesati : \n https://en.wikipedia.org/wiki/History_of_film ";
  alert(btn.info1);

  var cadru = document.getElementById("cadru");

  cadru.addEventListener('click', cadruclick, true);

  function cadruclick(event){
    alert('Clicked : \n' + 'X : ' + event.pageX + '\nY: ' + event.pageY + '\n' + event.target);
    var divnou = document.createElement("DIV");
    divnou.style.width = "6px";
    divnou.style.height = "6px";
    divnou.style.border = "1px solid red";
    divnou.style.position = "absolute";
    divnou.style.borderRadius = "50%";

    event.target.appendChild(divnou);
   // divnou.style.left = "";
    divnou.style.top = event.pageY + 'px';
    divnou.style.left = event.pageX + 'px';
   // console.log(divnou.style.top + ' ' + divnou.style.left + ' string : ' + string);
  }

  btn.onclick = function(){
    
    if( btn.clicked == 0   )
    {    

    let sbt = document.createElement("h1");
    let t = document.createTextNode("Late 20th Century(the 1990s - cont.)");
    sbt.appendChild(t);
    btn.parentElement.insertBefore(sbt, btn); 
    sbt.className = "subtitle";
    sbt.classList.add ("desters");

    let par1 = document.createElement("p");
    par1.className = "desters";

    par1.innerHTML = text[btn.clicked];
    btn.parentElement.insertBefore(par1, btn);  

    btn.clicked++;
    btn.remaining--;
    btn.info1 = 'Ati apasat butonul de ' + btn.clicked + ' ori .Exista inca ' + btn.remaining + ' paragrafe care pot fi afisate.' ; 

    alert(btn.info1);

    }

    else
      if( btn.clicked <= 4 )
      {
        let par1 = document.createElement("p");
        par1.className = "desters";

        par1.innerHTML = text[btn.clicked];
        btn.parentElement.insertBefore(par1, btn);  

        btn.clicked++;
         btn.remaining--;
         btn.info1 = 'Ati apasat butonul de ' + btn.clicked + ' ori .Exista inca ' + btn.remaining + 'paragrafe care pot fi afisate.' ;  

        alert(btn.info1);
      }

    else
      if( btn.clicked == 5)
      {
        btn.innerHTML = "Show Less";
        btn.clicked++;
        alert(btn.info2);
      }
    else
      if( btn.clicked == 6 )
      {
        btn.innerHTML = "Show more";
        btn.clicked = 0;
        btn.remaining = 5 - btn.clicked;
        let vector = document.querySelector("article").children;

        for(let i=0; i < vector.length; i++)
          if(vector[i].classList.contains("desters"))
            {
              btn.parentElement.removeChild(vector[i]);
              i--;
            }
      }

}


var urlfilm = Array(10);
urlfilm[0] = "https://www.imdb.com/title/tt0000272/";
urlfilm[1] = "https://www.imdb.com/title/tt0007646/";
urlfilm[2] = "https://www.imdb.com/title/tt0018037/";
urlfilm[3] = "https://www.imdb.com/title/tt0031381/";
urlfilm[4] = "https://www.imdb.com/title/tt0034583/";
urlfilm[5] = "https://www.imdb.com/title/tt0045943/";
urlfilm[6] = "https://www.imdb.com/title/tt0058331/";
urlfilm[7] = "https://www.imdb.com/title/tt0068646/";
urlfilm[8] = "https://www.imdb.com/title/tt0083866/";
urlfilm[9] = "https://www.imdb.com/title/tt0099685/";

var fereastra2;

var dataobj = new Date();
var zi =  dataobj.getDay();
zi = 5*zi + 10;

var randmovie = document.getElementById("randmovie");
randmovie.dist = 0;
randmovie.style.left = randmovie.dist + 'px';

randmovie.muta = function(offset){
randmovie.dist = randmovie.dist + offset;
randmovie.style.left = randmovie.dist + 'px';

randmovie.nr = Math.floor(Math.random()*10) * 10 + 1900;
randmovie.innerHTML = randmovie.nr + ' - ' + (randmovie.nr + 10);

if(randmovie.dist + offset > window.innerWidth)
  randmovie.dist = -offset;

randmovie.onclick = function(){
  alert('Opening a new tab with the random movie!');
  clearInterval(randmovie.myvar);
  fereastra2 = window.open(urlfilm[(randmovie.nr-1900)/10]);

}

}

randmovie.myvar = setInterval(randmovie.muta,300, zi);


}




