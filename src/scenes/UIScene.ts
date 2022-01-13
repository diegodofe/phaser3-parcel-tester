import Phaser from 'phaser'

export default class UIScene extends Phaser.Scene
{

	constructor()
	{
		super('uiscene')
	}

	create(){
        this.scene.launch('settingsscene')
    }
}
