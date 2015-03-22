// The main game state

GAME.Main = function() {
    this.stackY = 380;
};

GAME.Main.prototype = {

    create: function() {
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.gravity.y = 300;

        this.subtitle = new GAME.Subtitle(this.game, this.game.world.centerX, this.stackY + 65);
        this.drawClickDrag();
        this.drawBoxStack();
    },
    
    update: function() {
        this.subtitle.update();
        this.stack.update();
    },
    
    drawBoxStack: function() {
        this.stack = new GAME.BoxStack(this.game,
            this.game.world.centerX - 130, this.stackY, 80, 80, 4, this.stackText);
    },
    
    drawClickDrag: function() {
        this.drag = this.game.add.sprite(this.game.world.centerX - 285, 125, 'clickDrag');
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
                text: 'Java-\nScript'
            },
            {
                text: 'Back-\nbone'
            },
            {
                text: 'jQuery'
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
