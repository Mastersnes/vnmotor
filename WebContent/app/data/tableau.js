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
                var lastText = this.blocs[this.blocs.length-1];
                lastText.textes.push(text);
                return this;
            };

            this.addLine = function() {
                this.addText("<br/>");
                return this;
            };

            this.currentText = function() {
                if (this.finish()) return null;
                var bloc = this.blocs[this.currentBloc];
                if (bloc) {
                    var texte = bloc.textes[this.currentText];
                    if (texte)
                        return {
                            position : bloc.position,
                            texte : texte
                        }
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

            this.init(parent);
        };
    });