// Sets up canvas prior to loading assets

GAME.Boot = function() {};

GAME.Boot.prototype = {
    preload: function() {
        // Load loading screen assets
    },
    
    create: function() {
        this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
        this.game.scale.setMinMax({
            minWidth: 800,
            minHeight: 800
        })
        this.game.state.start('preloader');
    }
};
