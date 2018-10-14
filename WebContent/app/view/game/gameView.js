/*global define */
define(["jquery",
        'underscore',
        "app/utils/utils",
        "app/utils/popupUtils",
        "text!app/template/game/game.html",
        "app/manager/sceneManager",
        "app/manager/textManager"
        ],
function($, _, Utils, PopupUtils, page, 
		SceneManager, TextManager) {
	'use strict';

	return function(parent) {
		this.init = function(parent) {
		    this.el = $("#app");
			this.parent = parent;
		    this.Textes = parent.Textes;
			this.mediatheque = parent.Mediatheque;
			this.kongregateUtils = parent.kongregateUtils;
			this.pause = false;
			this.endGame = false;
			
			this.render();
			
			// Manager
			this.saveManager = parent.saveManager;
			
            this.scene = new SceneManager(this);
            this.textManager = new TextManager(this);

            if (!this.alreadyLoop) {
			    this.alreadyLoop = true;
                this.makeEvents();
                this.loop();
            }
		};

		this.render = function(load) {
			_.templateSettings.variable = "data";
			var template = _.template(page);
			var templateData = {
					text : this.Textes
			};
			this.el.html(template(templateData));
		};
		
		this.loop = function() {
		    if (!this.endGame) {
    		    if (!this.pause) {
                    this.saveManager.saveInSession();
                }
                var that = this;
                setTimeout(function() {
                    that.loop();
                }, 1000);
		    }
        };
        
        this.makeEvents = function() {
            var that = this;
            
            $(".text").click(function(e) {
            	e.preventDefault();
            	return true;
            });
            $(".text").bind('selectstart', function(e){
            	e.preventDefault();
            	return false;
            });
        };
        
		this.init(parent);
	};
});