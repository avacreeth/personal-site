// Loads main game assets

GAME.Preloader = function() {};

GAME.Preloader.prototype = {
    preload: function() {
        // Load main game assets
    },
    
    create: function() {
        this.game.state.start('main');
    }
};

