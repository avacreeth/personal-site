// Loads main game assets

GAME.Preloader = function() {};

GAME.Preloader.prototype = {
    preload: function() {
        // Load main game assets
        this.game.load.image('subtitle', GAME.assets.subtitle);
        this.game.load.image('fullStack', GAME.assets.fullStack);
        this.game.load.image('stackTech', GAME.assets.stackTech);
        this.game.load.image('clickDrag', GAME.assets.clickDrag);
        this.game.load.image('cursor', GAME.assets.cursor);
        this.game.load.spritesheet('player', GAME.assets.player, 64, 64);
    },
    
    create: function() {
        var _this = this;
        
        WebFont.load({
            google: {
                families: ['Press Start 2P']
            },
            active: function() {
                _this.game.state.start('main');
            }
        });
    }
};

