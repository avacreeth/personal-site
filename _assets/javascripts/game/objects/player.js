// Stick figure player

GAME.Player = function(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    
    this.inAir = false;
    
    this.init();
};

GAME.Player.prototype = {
    init: function() {
        this.sprite = this.game.add.sprite(this.x, this.y, 'player');
        this.game.physics.p2.enable(this.sprite);
        this.sprite.body.fixedRotation = true;
        this.sprite.animations.add('run', [11, 12, 13, 14, 15], 10, true);
        this.sprite.animations.add('jump', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, false);
    },
    
    update: function(cursors) {
            var jumping = this.jumping();
        
            if (cursors.left.isDown) {
                this.sprite.body.moveLeft(150);
                this.sprite.scale.x = 1;
                
                if (!jumping) {
                    this.sprite.animations.play('run');
                }
            } else if (cursors.right.isDown) {
                this.sprite.body.moveRight(150);
                this.sprite.scale.x = -1;
                
                if (!jumping) {
                    this.sprite.animations.play('run');
                }
            } else {
                this.sprite.body.velocity.x = 0;
                
                if (!jumping) {
                    this.sprite.animations.stop();
                    this.sprite.frame = 16;
                }
            }

            if (cursors.up.isDown && !jumping) {
                this.sprite.body.moveUp(240);
                this.sprite.animations.play('jump');
            } 
    },

    jumping: function() {
        var yAxis = p2.vec2.fromValues(0, 1);
        var result = false;
    
        for (var i = 0; i < this.game.physics.p2.world.narrowphase.contactEquations.length; i++)
        {
            var c = this.game.physics.p2.world.narrowphase.contactEquations[i];
    
            if (c.bodyA === this.sprite.body.data || c.bodyB === this.sprite.body.data)
            {
                var d = p2.vec2.dot(c.normalA, yAxis); // Normal dot Y-axis
                if (c.bodyA === this.sprite.body.data) d *= -1;
                if (d > 0.5) result = true;
            }
        }
        
        return !result;
    
    }
};
