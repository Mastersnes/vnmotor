'use strict';
define(["jquery", 
        "app/utils/utils"], function($, Utils){
    return function(parent){
        this.init = function(parent) {
            this.parent = parent;
            this.Textes = parent.Textes;
            this.mediatheque = parent.mediatheque;
            
            var that = this;
            $(window).on('debouncedresize resize', function() {
            	that.resize();
  			});
            
            $(document).ready(function() {
            	that.resize();
            });
        };
        
        /**
         * Redimensionne la fenetre en fonction du ratio de l'ecran
         */
        this.resize = function() {
            var w = $("body").width();
            var h = $("body").height();
            var rapport = {
                    w : 1280 / 720,
                    h : 720 / 1280
            };
            
            if (w >= h) {
                $(".scene").css({
                    width : h * rapport.w + "px",
                    height : "100%"
                });
            }else {
                $(".scene").css({
                    width : "100%",
                    height : w * rapport.h + "px"
                });
            }
        };
        
        this.init(parent);
    };
});