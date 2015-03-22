// Loads main game assets

GAME.Preloader = function() {};

GAME.Preloader.prototype = {
    preload: function() {
        // Load main game assets
        this.game.load.image('name', GAME.assets.name);
        this.game.load.image('subtitle', GAME.assets.subtitle);
    },
    
    create: function() {
        this.game.state.start('main');
    }
};

