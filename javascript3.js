
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


