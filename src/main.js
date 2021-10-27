import Phaser from 'phaser'

import {Plugin as NineSlicePlugin} from 'phaser3-nineslice'

import Preloader from './scenes/Preloader'
import Game from './scenes/Game'
import UIScene from './scenes/UIScene'

const config = {
	type: Phaser.AUTO,
	width: 700,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: { y: 0 }
		}
	},
	plugins: {
		global: [ NineSlicePlugin.DefaultCfg ]
	},
	scene: [Preloader, Game, UIScene]
}

export default new Phaser.Game(config)
