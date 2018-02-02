var MyMod=(function () {
	function showme (argument) {
		alert("this is my module");
	}

	return{
		alert:showme
	};
})();