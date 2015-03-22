// The static physics enabled subtitle pbject

GAME.Subtitle = function(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.init();
};

GAME.Subtitle.prototype = {
    init: function() {
        this.sprite = this.game.add.sprite(this.x, this.y, 'fullStack');
        this.game.physics.p2.enable(this.sprite);
        this.sprite.body.static = true;
    },

    update: function() {
        if (this.sprite.input && this.sprite.input.isDragged) {
        	this.sprite.body.x = this.game.input.activePointer.worldX;
        	this.sprite.body.y = this.game.input.activePointer.worldY;
        	this.sprite.body.setZeroVelocity();
        	this.sprite.body.setZeroRotation();
        }
    }
};
