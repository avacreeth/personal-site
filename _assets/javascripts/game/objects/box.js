// A simple physics enabled box

GAME.Box = function(game, x, y, sizeX, sizeY, text) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.text = text;
    this.init();
};

GAME.Box.prototype = {
    init: function() {
        var bmd = this.game.add.bitmapData(this.sizeX, this.sizeY);

        bmd.ctx.fillStyle = '#ffffff';
        bmd.ctx.fillRect(0, 0, this.sizeX, this.sizeY);

        bmd.ctx.lineWidth = 5;
        bmd.ctx.strokeStyle = '#000000';
        bmd.ctx.strokeRect(0, 0, this.sizeX, this.sizeY);
        
        this.sprite = this.game.add.sprite(this.x, this.y, bmd);
        this.game.physics.p2.enable(this.sprite);
        this.sprite.body.collideWithWorldBounds = true;
        this.sprite.inputEnabled = true;
        
        this.draggable();
        
        this.drawText();
    },
    
    drawText: function() {
        this.textSprite = this.game.add.text(0, 0, this.text, {
            font: '12px "Press Start 2P"'
        });
        this.textSprite.anchor.set(0.5);
        this.sprite.addChild(this.textSprite);
    },
    
    draggable: function() {
        this.sprite.input.enableDrag();
    },
    
    killable: function() {
        this.sprite.events.onInputDown.add(function() {
            this.sprite.kill();
        }, this);
    },
    
    update: function() {
        if (this.sprite.input.isDragged) {
            this.sprite.body.x = this.game.input.activePointer.worldX;
            this.sprite.body.y = this.game.input.activePointer.worldY;
        }
    }
};
