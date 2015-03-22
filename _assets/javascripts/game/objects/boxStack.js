// A stack of boxes

GAME.BoxStack = function(game, x, y, sizeX, sizeY, rows, textMap) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.rows = rows;
    
    // Should be even number
    this.spacing = 6;
    
    this.boxes = [];
    
    this.textMap = textMap;

    this.init();
};

GAME.BoxStack.prototype = {
    init: function() {
        this.drawStack(this.rows, this.x, this.y)
    },
    
    drawStack: function(row, x, y, static) {
        var currentX = x;
        
        for (var i = 0; i < row; i++) {
            this.boxes.push(new GAME.Box(this.game, currentX, y, this.sizeX, this.sizeY,
                this.textMap[row - 1][i].text));
            currentX += this.sizeX + this.spacing;
        }
        
        if (row - 1 > 0) {
            this.drawStack(row - 1, x + (this.sizeX + this.spacing) / 2, y - this.sizeY)
        }
    },
    
    update: function() {
        // Update each box
        for (var i = 0; i < this.boxes.length; i++) {
            this.boxes[i].update();
        }
    }
};

