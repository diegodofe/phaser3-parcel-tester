import Phaser from 'phaser'

export default class Game extends Phaser.Scene
{

	constructor()
	{
		super('game')
	}

	create()
	{
		// Game scene will call multiple scenes:
		this.scene.launch('uiscene')
	}
}
