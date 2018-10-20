'use strict';
define(["jquery"], function($){
	var data = [
		{
			texte : {
				position : "bas",
				texte : "Premiere scene - Ciel etoilé"
			},
			image : "app/img/game/tableaux/1.png",
			transitions : {
				start : null,
				end : null
			}
		},
		{
			texte : {
				position : "haut",
				texte : "Deuxieme scene - Tasse"
			},
			image : "app/img/game/tableaux/2.png",
			transitions : {
				start : null,
				end : null
			}
		},
		{
			texte : {
				position : "bas",
				texte : "Troisieme scene - Chambre"
			},
			image : "app/img/game/tableaux/3.png",
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
