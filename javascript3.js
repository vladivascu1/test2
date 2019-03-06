
var IndexTabel = 6;
var FilmNames = ["The Last Emperor", "Gigi", "Slumdog Millionaire", "Amadeus"];
var Years = ["1987", "1958", "2008", "1984"];
var Awards = ["9", "9", "9", "8"];
var Nominations = ["12", "9", "9", "10"];


function addmore() {
    var table = document.getElementById("table2");
    
    if(IndexTabel<10)
    {

    var row = table.insertRow(IndexTabel);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = FilmNames[IndexTabel-6];
    cell2.innerHTML = Years[IndexTabel-6];
    cell3.innerHTML = Awards[IndexTabel-6];
    cell4.innerHTML = Nominations[IndexTabel-6];

    IndexTabel++;
	}

	else
	{
		alert("The maximum number of rows has been reached!");
		var btn = document.getElementById("test");
		btn.style.visibility="hidden";
		var btnclear = document.createElement("button");
		btnclear.className="addbtn";
		btnclear.id = "clear";
		btnclear.innerHTML="Reset Table";
		var s = document.getElementById("btnsection");
		s.appendChild(btnclear);

		btnclear.onclick = function(){

		IndexTabel--;			
		document.getElementById("table2").deleteRow(IndexTabel);
		IndexTabel--;			
		document.getElementById("table2").deleteRow(IndexTabel);
		IndexTabel--;			
		document.getElementById("table2").deleteRow(IndexTabel);
		IndexTabel--;			
		document.getElementById("table2").deleteRow(IndexTabel);

		var btnrecover = document.getElementById("test");
		btnrecover.style.visibility="visible";

		s.removeChild(btnclear);

		}


	}

}


window.onload = function(){

	var btn = document.getElementById("butonas");
	var quizdiv = document.getElementById("quizdiv");
	var btnsubmit = document.getElementById("butonas2");
	var btnview = document.getElementById("butonas3");

	quizdiv.style.display = 'none';

	btn.addEventListener('click',schimbabtn, true);

	function schimbabtn(){
		if(btn.value == 'Show Form'){
			btn.value = 'Hide Form';
			//quizdiv.style.visibility = 'hidden';
			  quizdiv.style.display = 'block';
		}
			else{

			btn.value = 'Show Form';
			//quizdiv.style.visibility = 'visible';
			quizdiv.style.display = 'none';
			}
	}

	btnsubmit.addEventListener('click', submitfunction);
	btnview.addEventListener('click', viewfunction);


	function submitfunction(event){

	event.target.style.backgroundColor = 'green';

	let textbox1 = document.getElementById("txtbox1");
	let textbox2 = document.getElementById("txtbox2");

	window.localStorage.setItem('film', textbox1.value);
	window.localStorage.setItem('actor', textbox2.value);

	let checkarray = document.getElementsByClassName('checkb');
	let radioarray = document.getElementsByClassName('radiob');
	let textcheck ="";
	let textradio ="";
 
	for(let i = 0; i<checkarray.length; i++){
		if(checkarray[i].checked ==  true)
			textcheck = textcheck + checkarray[i].value + '\n';
	}

	window.localStorage.setItem('check', textcheck);


	for(let i = 0; i<radioarray.length; i++){
		if(radioarray[i].checked ==  true){
			textradio = radioarray[i].value + '\n';
			break;
		}
	}

	window.localStorage.setItem('radio', textradio);

	}


	function viewfunction(){

	let text1 = 'Filmul preferat : ' + window.localStorage.getItem('film');
	let text2 = 'Actorul preferat : ' + window.localStorage.getItem('actor');
	let text3 = window.localStorage.getItem('check');
	let text4 = 'Merg la cinema : ' + window.localStorage.getItem('radio');

	alert('La ultima accesare am raspuns astfel :\n' + text1 + '\n' + text2 + '\n' + text3  + text4);

	}

	var radios = document.getElementsByClassName('radiob');

for(let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change',function(){
    	if(this.checked) {
        	alert(this.value + '? That puts you in the same category as ' + (3 - i)* 33 + '% of filmgoers' )
    }


    })
}




}