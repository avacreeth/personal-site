// The static physics enabled subtitle pbject

GAME.Subtitle= function(game) {
    this.game = game;
    this.init();
};

GAME.Subtitle.prototype = {
    init: function() {
        this.sprite = this.game.add.sprite(this.game.world.centerX + 100, 250, 'subtitle');
        this.game.physics.p2.enable(this.sprite);
        this.sprite.body.static = true;
    },

    update: function() {
        // Nothing
    }
};
