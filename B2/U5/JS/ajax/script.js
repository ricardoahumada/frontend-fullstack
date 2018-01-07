var url1 = "http://www.mocky.io/v2/5a3a960631000068148e9635";
var url2 = "http://www.mocky.io/v2/5a3bc6fc300000982182d360";


function getInfoFromURL (unaUrl,unNombreDiv,unaFuncion) {
	var request = new XMLHttpRequest();

	request.open("GET", unaUrl);

	request.onload = function () {
		if(this.status==200){
			unaFuncion(unNombreDiv,this.response);
		}else{
			console.log('No es Éxito!!');
		}
	};

	request.send();
}

document.getElementById('llama1').onclick=function (argument) {
	getInfoFromURL (url1,'recibido1',inyectaLIs); 
}

document.getElementById('llama2').onclick=function (argument) {
	getInfoFromURL (url2,'recibido2',inyectaTablas); 
}

document.getElementById('llama3').onclick=function (argument) {
	getInfoFromURL (url2,'recibido3',inyectaTablas); 
}

function inyectaLIs (divname,texto) {
	document.getElementById(divname).innerHTML= '<li>'+texto+'</li>';
}

function inyectaTablas (divname,texto) {
	document.getElementById(divname).innerHTML= '<table><tr><td>'+texto+'</td></tr></table>';
}

function califra (divname,texto) {
	document.getElementById(divname).innerHTML= 'el '+texto+'es califragilistico_spiralidozo';
}