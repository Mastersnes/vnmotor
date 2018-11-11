'use strict';
define(["jquery", "app/data/tableau"], function($, Scene){
    var data = [];

    addScene("app/img/game/tableaux/1.png")
        .addNewText("Scene1 Text1", "bas").addLine()
        .addText("Scene1 Text2");
    
    addScene("app/img/game/tableaux/2.png");
    
    addScene("app/img/game/tableaux/3.png")
        .addNewText("Le lendemain", "center", "black").addLine()
        .addText("Matin", "red").addLine()
    	.addText("A 14h00...", "black");
    
    addScene("app/img/game/tableaux/2.png")
    .addNewText("Scene4 Text1", "bas")
    .addNewText("Scene4 Bloc2", "bas").addText(" Scene4 Bloc2 Text2")
    .addNewText("Scene4 Bloc3", "bas").addLine()
    .addText("Scene4 Bloc3 Text2");


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