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
		this.load.image('grey-panel', 'assets/ui/uipack_fixed/PNG/grey_panel.png')
		this.load.image('music-on', 'assets/ui/iconpack/PNG/Black/1x/musicOn.png')
		this.load.image('music-off', 'assets/ui/iconpack/PNG/Black/1x/musicOff.png')
		this.load.image('save', 'assets/ui/iconpack/PNG/Black/1x/save.png')
		this.load.image('door', 'assets/ui/iconpack/PNG/Black/1x/door.png')

	}

	create()
	{
		this.scene.start('MainScene') // Calls main game scene.
	}
}
