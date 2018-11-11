/*global define */
define(["jquery",
        'underscore'],
function($, _) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.tableauxView = parent;
			this.currentScene = null;
			this.currentBloc = 0;
		};
		
		/**
		 * Commence la scene
		 */
		this.start = function(scene) {
			var el = $("#tableau");
			if (!scene) return;
			this.currentScene = scene;
			this.currentBloc = 0;
			
			el.find(".image").css("background-image", "url("+this.currentScene.image+")");
			this.refresh();
		};
		
		/**
		 * Affiche le bloc de texte courant
		 */
		this.refresh = function() {
			var el = $("#tableau .bloc");
			if (!this.currentScene) return;
			if (this.isFinish()) return el.hide();
			
			var bloc = this.currentScene.getBloc(this.currentBloc);
            if (bloc) {
            	el.css("top", "");
				el.attr("position", bloc.position);

				el.find(".textes").empty();
				
				for (var text in bloc.textes) {
	            	var textDom = $("<span></span>");
	            	textDom.css("color", bloc.textes[text].color);
	            	textDom.html(bloc.textes[text].texte);
					el.find(".textes").append(textDom);
	            }
				
				if (bloc.position == "center") {
					var sceneH = $(".scene").height();
					var blocH = el.height();
					var milieu = (sceneH/2)-(blocH/2);
					var milieuP = (milieu * 100) / sceneH;
					el.css("top", milieuP + "%");
				}
				el.show();
				
				this.next();
            }else el.hide();
		};
		
		/**
		 * Passe au texte suivant de la scene
		 */
		this.next = function() {
			if (!this.currentScene) return false;
			
			var textDom = $("#tableau .bloc .textes span:not(.visible)").first();
			if (textDom.length > 0) {
				textDom.addClass("visible");
			}else {
				this.currentBloc++;
				this.refresh();
			}
			
			return this.isFinish();
		};
		
		/**
		 * Indique si la scene est terminée
		 */
		this.isFinish = function() {
			return this.currentBloc >= this.currentScene.blocs.length;
		};
		
		/**
		 * Termine la scene
		 */
		this.end = function() {
			if (!this.currentScene) return;
		};

		this.init(parent);
	};
});