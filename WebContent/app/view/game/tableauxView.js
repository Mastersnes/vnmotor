/*global define */
define(["jquery",
        'underscore',
        "app/data/tableaux",
        "text!app/template/game/tableau.html",],
function($, _, Tableaux, page) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.gameView = parent;
			this.current = 0;
			this.currentScene;
		};
		
		this.render = function() {
			this.el = $("#tableau");
			
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : parent.Textes
			};
			this.el.html(template(templateData));
			
			this.refresh();
			
			this.makeEvents();
		};
		
		this.refresh = function() {
			this.currentScene = Tableaux.get(this.current);
			if (this.currentScene) {
				this.el.find(".fond").css("background-image", "url("+this.currentScene.image+")");

				var currentText = this.currentScene.getCurrentText();
				if (currentText) {
                    this.el.find(".text").attr("position", currentText.position);
                    this.el.find(".text span").html(currentText.texte);
                }else {
                    this.el.find(".text").hide();
				}
			}
		};

		this.makeEvents = function() {
			var that = this;
			this.el.click(function() {
				if (!that.currentScene) return;
				that.currentScene.next();
				if (that.currentScene.finish())
					that.current++;
				that.refresh();
			});
		};
		
		this.loop = function() {
			
		};
        
		this.init(parent);
	};
});