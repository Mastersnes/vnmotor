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
			var currentTableau = Tableaux.get(this.current);
			if (currentTableau) {
				this.el.find(".fond").css("background-image", "url("+currentTableau.image+")");
				this.el.find(".text").attr("position", currentTableau.texte.position);
				this.el.find(".text").html(currentTableau.texte.texte);
			}
		};
		
		this.makeEvents = function() {
			var that = this;
			this.el.click(function() {
				that.current++;
				that.refresh();
			});
		};
		
		this.loop = function() {
			
		};
        
		this.init(parent);
	};
});