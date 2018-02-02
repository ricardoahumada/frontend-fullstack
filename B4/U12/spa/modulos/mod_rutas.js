var Router=(function () {
	var ruta_actual="usuarios";
	var observable=null;

	function init(ruta){
		return cambiar_a_ruta (ruta_actual);
	}

	function cambiar_a_ruta (ruta) {

		switch (ruta) {
			case "usuarios":
				observable=ModUsuarios.show();
				break;
			case "pedidos":
				observable=ModPedidos.show();
				break;
			default:
				observable=ModUsuarios.show();
				break;
		}

		ruta_actual=ruta;

		return observable;

	}

	return {
		init:init,
		change:cambiar_a_ruta
	}
})();