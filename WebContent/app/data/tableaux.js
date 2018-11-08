'use strict';
define(["jquery", "app/data/tableau"], function($, Scene){
    var data = [];

    addScene("app/img/game/tableaux/1.png")
        .addNewText("Test1", "bas").addLine()
        .addText("Test2");
    addScene("app/img/game/tableaux/2.png")
        .addNewText("Test2", "haut");
    addScene("app/img/game/tableaux/3.png")
        .addNewText("Test3", "bas");


    function addScene(image) {
        var scene = new Scene(image);
        data.push(scene);
        return scene;
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