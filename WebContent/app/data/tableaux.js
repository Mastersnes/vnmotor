'use strict';
define(["jquery"], function($){
	var data = [
		{
			texte : {
				position : "bas",
				texte : "Bonjour, ceci est un test"
			},
			image : "app/img/game/tableaux/caca.jpg",
			transitions : {
				start : null,
				end : null
			}
		},
		{
			texte : {
				position : "haut",
				texte : "Deuxieme test"
			},
			image : "app/img/game/tableaux/caca.jpg",
			transitions : {
				start : null,
				end : null
			}
		}
	];
	
	return {
		get : function(key) {
			if (data[key]) return $.extend(true, {}, data[key]);
			else return null;
		},
		list : function() {
			return data;
		}
	};
});
