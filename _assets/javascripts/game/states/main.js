// The main game state

GAME.Main = function() {};

GAME.Main.prototype = {

    create: function() {
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.gravity.y = 300;

        this.subtitle = new GAME.Subtitle(this.game);
        this.drawBoxStack();
    },
    
    update: function() {
        this.subtitle.update();
        this.stack.update();
    },
    
    drawBoxStack: function() {
        this.stack = new GAME.BoxStack(this.game,
            this.game.world.centerX - 130, 350, 80, 80, 4, this.stackText);
    },
    
    stackText: [
        [
            {
                text: 'HTML'
            }
        ],
        [
            {
                text: 'CSS'
            },
            {
                text: 'Sass'
            }
        ],
        [
            {
                text: 'JS'
            },
            {
                text: 'Backbone'
            },
            {
                text: 'Phaser'
            }
        ],
        [
            {
                text: 'Ruby',
            },
            {
                text: 'Rails'
            },
            {
                text: 'SQL'
            },
            {
                text: 'Mongo'
            }
        ]
    ]
};
