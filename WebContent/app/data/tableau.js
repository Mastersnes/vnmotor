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

            this.addNewText = function(text, position) {
                this.blocs.push({
                    position : position,
                    textes : [text]
                });
                return this;
            };

            this.addText = function(text) {
                var lastBloc = this.blocs[this.blocs.length-1];
                lastBloc.textes.push(text);
                return this;
            };

            this.addLine = function() {
            	var lastBloc = this.blocs[this.blocs.length-1];
                lastBloc.textes[lastBloc.textes.length-1] += "<br/>";
                return this;
            };

            this.getCurrentText = function() {
            	if (this.finish()) return null;
                var bloc = this.blocs[this.currentBloc];
                if (bloc) {
                    var texte = "";
                	for (var i=0; i<=this.currentText; i++) {
                    	texte += bloc.textes[i];
                    }
                    if (texte)
                        return {
                            position : bloc.position,
                            texte : texte
                        };
                }
                return null;
            };

            this.finish = function() {
                return this.currentBloc >= this.blocs.length;
            };

            this.next = function() {
                if (this.finish());
                this.currentText++;

                var bloc = this.blocs[this.currentBloc];
                if (this.currentText >= bloc.textes.length) {
                    this.currentText = 0;
                    this.currentBloc++;
                }
            };

            this.init(image);
        };
    });