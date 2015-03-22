// The main game state

GAME.Main = function() {};

GAME.Main.prototype = {

    create: function() {
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.gravity.y = 100;
        
        this.title = new GAME.Title(this.game);
        this.subtitle = new GAME.Subtitle(this.game);
        
        this.game.input.onDown.add(this.onDown, this);
    },
    
    onDown: function() {
        this.title.enablePhysics();
        this.game.input.onDown.remove(this.onDown, this);
    },
    
    update: function() {
        this.game.physics.arcade.collide(this.title.sprite, this.subtitle.sprite);
        
        this.title.update();
        this.subtitle.update();
    }
};
