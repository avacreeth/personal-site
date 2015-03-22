//= require game/assets
//= require_tree ./game/states
//= require_tree ./game/objects

$(function() {
    WebFont.load({
        google: {
            families: ['Roboto:300']
        },
        active: initGame
    });
    
    function initGame() {
        var game = new Phaser.Game('100', '100', Phaser.AUTO, '');
        game.state.add('boot', GAME.Boot);
        game.state.add('preloader', GAME.Preloader);
        game.state.add('main', GAME.Main);
        game.state.start('boot');
    }
});

