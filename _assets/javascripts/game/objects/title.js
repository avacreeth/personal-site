// The physics enabled title pbject

GAME.Title= function(game) {
    this.game = game;
    this.init();
};

GAME.Title.prototype = {
    init: function() {
        this.sprite = this.game.add.sprite(this.game.world.centerX - 100, 150, 'name');
        this.game.physics.p2.enable(this.sprite);
        this.sprite.body.static = true;
        this.sprite.body.collideWithWorldBounds = true;
    },
    
    enablePhysics: function() {
        this.sprite.body.static = false;
        this.sprite.body.mass = 1;
        this.sprite.inputEnabled = true;
        this.sprite.input.enableDrag();
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
