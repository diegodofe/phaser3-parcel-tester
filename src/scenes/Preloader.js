import Phaser from 'phaser'

export default class Preloader extends Phaser.Scene
{
	constructor()
	{
		super('preloader')
	}

	preload()
	{
		this.load.image('gear', 'assets/ui/iconpack/PNG/Black/1x/gear.png')
		this.load.image('grey-box', 'assets/ui/uipack_fixed/PNG/grey_box.png')
	}

	create()
	{
		this.scene.start('game')
	}
}
