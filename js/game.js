(function(){
    //Entry Point
    var init = function(){
    };
    
    init(); //start th egame
})(); //self-executing functin here

(function(){
    var game = this.colorQuestGame =
        this.colorQuestGame || {};
})();


//Main game logic
game.flow = {
    startOver: function(){
        game.startScene.hide();
        game.summaryScene.hide();
        
        game.gameoverScene.hide();
        game.gameScene.hide();
        game.startScene.show();
    },
    gameWin: function(){
        game.gameScene.hide();
        
        game.summaryScene.show();
    },
    gameOver: function(){
        game.startScene.show();
        game.gameScene.hide();
        
        game.gameoverScene.show();
    },
    nextLevel: function(){
        game.startScene.hide();
        game.summaryScene.show();
        game.gameScene.show();
    },
    finishLevel: function(){
        game.gameScene.hide();
        game.summaryScene.show();
    },
}