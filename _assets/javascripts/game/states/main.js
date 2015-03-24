// The main game state

GAME.Main = function() {
    this.stackY = 380;
};

GAME.Main.prototype = {

    create: function() {
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.game.physics.p2.gravity.y = 300;

        // Helper text is behind all
        this.bgHelpers = this.game.add.group();

        this.subtitle = new GAME.Subtitle(this.game, this.game.world.centerX, this.stackY + 65);
        this.drawClickDrag();
        this.drawBoxStack();
        this.wireSpawn();
        
        this.cursors = this.game.input.keyboard.createCursorKeys();
    },
    
    update: function() {
        this.subtitle.update();
        this.stack.update();
        
        if (this.player) {
            this.player.update(this.cursors);
        }
    },
    
    drawBoxStack: function() {
        this.stack = new GAME.BoxStack(this.game,
            this.game.world.centerX - 130, this.stackY, 80, 80, 4, this.stackText);
    },
    
    drawClickDrag: function() {
        this.drag = this.bgHelpers.create(this.game.world.centerX - 285, 125, 'clickDrag');
    },
    
    wireSpawn: function() {
        $('.spawner').click(function() {
            $('.spawner').unbind('click');
            this.drag.kill();
            this.cursor = this.bgHelpers.create(this.game.world.centerX + 25, 150, 'cursor');
            this.player = new GAME.Player(this.game, this.game.world.centerX, 400);
            this.stack.explode();
        }.bind(this));
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
                text: 'Ruby'
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
