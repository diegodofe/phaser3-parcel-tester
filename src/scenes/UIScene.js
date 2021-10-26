import Phaser from 'phaser'

export default class UIScene extends Phaser.Scene
{

	constructor()
	{
		super('uiscene')
	}

	create()
	{
		// MY STUFF ////////////////////////////
        const {width} = this.scale;
		const settingsButton = this.add.sprite(width - 30, 30,'grey-box');
        this.add.image(settingsButton.x, settingsButton.y,'gear').setScale(0.7);

        // Add interactive pointer options for settingsButton
        settingsButton.setInteractive();

        settingsButton.on('pointerdown', function () {
            this.setTint(0xd3d3d3);
        });

        settingsButton.on('pointerout', function () {
            this.clearTint();
        });

        settingsButton.on('pointerup', function () {
         this.clearTint();
        });


	}
}
