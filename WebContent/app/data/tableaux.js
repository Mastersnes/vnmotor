'use strict';
define(["jquery"], function($){
    var data = [];

    addScene("Test1", "bas", "app/img/game/tableaux/1.png");
    addScene("Test2", "haut", "app/img/game/tableaux/2.png");
    addScene("Test3", "bas", "app/img/game/tableaux/3.png");

    function addScene(texte, position, image) {
        data.push({
            texte : {
                position : position,
                texte : texte
            },
            image : image,
            transitions : {
                start : null,
                end : null
            }
        });
    };

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