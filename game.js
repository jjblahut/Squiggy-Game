const gameState = {}

//function preload() {
    //this.load.image('squiggy', "squiggyFront.png");
//}

//function create() {
    //this.add.text(180, 70, "Squiggy's Waterskiing Adventure!", title)
    //gameState.squiggy = this.add.sprite(350, 200, 'squiggy');
    //gameState.squiggy.setInteractive();
    //this.add.text(250, 300, "Click on Squiggy to start")
    //this.input.on('pointerdown', function() {
        //this.scene.stop('Scene1');
        //this.scene.start('Scene2');
    //});
//}

//function update() {
    //gameState.squiggy.on('pointerover', function() {
        //gameState.squiggy.setScale(1.2);
    //});
    //gameState.squiggy.on('pointerout', function() {
        //gameState.squiggy.setScale(1);
    //});
//}

//const title = {
    //fontSize: 20,
//}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    backgroundColor: "#a0a0dd",
    
    scene: [Scene1, Scene2]
}

const game = new Phaser.Game(config);