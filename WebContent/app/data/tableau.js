/*global define */
define([],
    function() {
        'use strict';

        return function(image) {
            this.init = function(image) {
                this.image = image;
                this.blocs = [];
                this.currentBloc = 0;
                this.currentText = 0;
            };

            /**
             * Ajoute un nouveau bloc de texte
             */
            this.addNewText = function(text, position, color) {
                if (!color) color = "#e6dfdf";
            	this.blocs.push({
                    position : position,
                    textes : [],
                    color : color
                });
            	this.addText(text, color);
                return this;
            };

            /**
             * Ajoute un texte au bloc de texte courant
             */
            this.addText = function(text, color) {
                var lastBloc = this.blocs[this.blocs.length-1];
                if (!color) color = lastBloc.color;
                lastBloc.textes.push({
                	texte : text,
                	color : color
                });
                return this;
            };

            /**
             * Ajoute une ligne au texte courant
             */
            this.addLine = function() {
            	var lastBloc = this.blocs[this.blocs.length-1];
                lastBloc.textes[lastBloc.textes.length-1].texte += "<br/>";
                return this;
            };
            
            /**
             * Renvoi le bloc [index]
             */
            this.getBloc = function(index) {
            	if (index >= this.blocs.length) return null;
            	return this.blocs[index];
            };

            this.init(image);
        };
    });