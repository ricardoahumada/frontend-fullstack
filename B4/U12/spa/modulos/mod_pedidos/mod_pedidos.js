var ModPedidos=(function (argument) {
	var _lista_pedidos;

	function renderPedido (argument) {
		return Rx.Observable.fromPromise(
			$.get('./modulos/mod_pedidos/pedidos.hbs','html')
			.done(function (cuerpo_plantilla) {
				template=Handlebars.compile(cuerpo_plantilla);
				_generateVM();
				$('#app').empty().append(template(_lista_pedidos));
			})
			.then(d=>{return true})
		);
	}

	function _generateVM () {
		_lista_pedidos=[];
		var _usuarios=Store.getUsuarios();
		Store.getPedidos().forEach( function(ped, index) {
			ped.comprador=_usuarios.find(user=>{return (ped.comprador==user.uid);});
			_lista_pedidos.push(ped);
		});
	}

	return{
		show:renderPedido
	}
})();