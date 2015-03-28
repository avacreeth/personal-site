//= require game/assets
//= require_tree ./game/states
//= require_tree ./game/objects

$(function() {
    var $container = $('#game-container');
    
    var game = new Phaser.Game($container.width(), $container.height(),
        Phaser.AUTO, 'game-container', null, true);
    game.state.add('boot', GAME.Boot);
    game.state.add('preloader', GAME.Preloader);
    game.state.add('main', GAME.Main);
    game.state.start('boot');
});

