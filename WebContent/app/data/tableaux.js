'use strict';
define(["jquery", "app/data/tableau"], function($, Scene){
    var data = [];

    addScene("app/img/game/tableaux/1.png")
        .addNewText("Scene1 Text1", "bas").addLine()
        .addText("Scene1 Text2");
    
    addScene("app/img/game/tableaux/2.png")
        .addNewText("Scene2 Text1", "haut");
    
    addScene("app/img/game/tableaux/3.png")
        .addNewText("Scene3 Text1", "bas").addLine()
        .addText("Scene3 Text2");


    function addScene(image) {
        var scene = new Scene(image);
        data.push(scene);
        return scene;
    };

    return {
        get : function(key) {
            return data[key];
        },
        list : function() {
            return data;
        }
    };
});