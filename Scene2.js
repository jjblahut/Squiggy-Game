class Scene2 extends Phaser.Scene {
	constructor() {
		super({ key: 'Scene2' });
	}

    preload() {
        this.load.image('squiggy', "squiggyFront.png");
    }

    create() {
        //this.add.text(180, 70, "Squiggy's Waterskiing Adventure!", {fontSize: "20px"})
        gameState.squiggy = this.add.sprite(350, 200, 'squiggy');
        gameState.squiggy.setInteractive();
        //this.add.text(250, 300, "Click on Squiggy to start")
        this.input.on('pointerdown', function() {
            this.scene.stop('Scene1');
            this.scene.start('Scene2');
        });
    }

    update() {
        gameState.squiggy.on('pointerover', function() {
            gameState.squiggy.setScale(1.1);
        });
        gameState.squiggy.on('pointerout', function() {
            gameState.squiggy.setScale(1);
        });
    }
}