function getInfoFromURL (unaUrl,unaFuncion) {
	var request = new XMLHttpRequest();

	request.open("GET", unaUrl);

	request.onload = function () {
		if(this.status==200){
			unaFuncion(this.response);
		}else{
			console.log('No es Éxito!!');
		}
	};

	request.send();
}