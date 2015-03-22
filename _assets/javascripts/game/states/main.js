// The main game state

GAME.Main = function() {};

GAME.Main.prototype = {

    create: function() {
        this.drawTitle();
        this.drawSubtitle();
    },
    
    update: function() {
        
    },
    
    drawTitle: function() {
        var text = 'Andy Creeth';
        
        this.title = this.game.add.text(this.game.world.centerX - 100, 250, text, {
            font: '70px "Roboto"'
        });
        this.title.anchor.set(0.5);
    },
    
    drawSubtitle: function() {
        var text = 'Full Stack Developer';
        
        this.subtitle = this.game.add.text(this.game.world.centerX + 100, 350, text, {
            font: '40px "Roboto"'
        });
        this.subtitle.anchor.set(0.5);
    }
    
};
