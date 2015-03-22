(function(g) {
    var game;
    
    g.init = function() {
        game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
            preload: preload,
            create: create,
            update: update
        });
    }
    
    function preload() {

    }
    
    function create() {

    }
    
    function update() {

    }
})(MY_GAME);

$(function() {
    MY_GAME.init();
});
