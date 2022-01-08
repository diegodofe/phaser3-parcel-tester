import Phaser from 'phaser'
import {Plugin as NineSlicePlugin} from 'phaser3-nineslice'

import MainScene from './scenes/MainScene'
import Preloader from './scenes/Preloader'
import SettingsScene from './scenes/SettingsScene'
import UIScene from './scenes/UIScene'

const config = {
  type: Phaser.AUTO,
  width: 700,
  height: 600,
  physics: {default: 'arcade', arcade: {debug: true, gravity: {y: 0}}},
  plugins: {global: [NineSlicePlugin.DefaultCfg]},
  scene: [Preloader, MainScene, UIScene, SettingsScene]
}

               export default new Phaser.Game(config)
