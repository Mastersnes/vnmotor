/*global define */
define(["jquery",
        'underscore',
        "app/data/tableaux",
        "app/view/game/tableauView",
        "text!app/template/game/tableau.html",],
function($, _, Tableaux, TableauView, page) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
			this.gameView = parent;
			this.tableauView = new TableauView(this);
			this.scene = 0;
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
			var currentScene = Tableaux.get(this.scene);
			this.tableauView.start(currentScene);
		};

		this.makeEvents = function() {
			var that = this;
			this.el.click(function() {
				var isFinish = that.tableauView.next();
				if (isFinish) {
					that.tableauView.end();
					that.scene++;
					that.refresh();
				}
			});
		};
		
		this.loop = function() {
			
		};
        
		this.init(parent);
	};
});