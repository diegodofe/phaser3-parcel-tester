import Phaser from 'phaser'

export default class SettingsMenu{

    /**
     * @param {Phaser.Scene} scene
     */
    constructor(scene){

        // Initialize scene
        this.scene = scene;

        // Initialize/make settings menu hidden
        var isOpen = false;
        this.isOpen = isOpen;
        
        // Initialize container to group elements
        const {width} = this.scene.scale;
        const container = this.scene.add.container(width + 300,60);
        this.container = container;

        // Create grey ui panel element
        const panel = this.scene.add.nineslice(0,0,200,50,'grey-panel',24 ).setOrigin(1,0);
        
        // Create grey ui button element
        const toggleMusic = this.scene.add.image(-panel.width+10, 8, 'grey-box').setOrigin(0,0);
        
        // Create music icons elements
        const musicOn = this.scene.add.image(
            toggleMusic.x + toggleMusic.height * 0.5, 
            toggleMusic.y +toggleMusic.height * 0.5, 
            'music-on').setScale(0.7);

        const musicOff = this.scene.add.image(
            toggleMusic.x + toggleMusic.height * 0.5, 
            toggleMusic.y +toggleMusic.height * 0.5, 
            'music-off').setScale(0.7).setVisible(false);


        // Add all elements to container for grouped animations
        container.add(panel);
        container.add(toggleMusic);
        container.add(musicOn);
        container.add(musicOff);

        // interactive pointer options for toggleMusic button
        toggleMusic.setInteractive()
        .on('pointerdown', function () {
            this.setTint(0xd3d3d3);
        })
        .on('pointerout', function () {
            this.clearTint();
        })
        .on('pointerup', function () {
            this.clearTint();

            let isMute = !musicOn.visible;
            isMute = !isMute;
            musicOn.setVisible(!isMute);

            this.scene.sound.mute = isMute;
            musicOff.setVisible(isMute);
        });
        
    }

    // Show entire settings menu
    show(){
        if (this.isOpen){
            return;
        }

        const {width} = this.scene.scale;

        this.scene.tweens.add({
            targets: this.container,
            x: width - 10,
            duration: 300,
            ease: Phaser.Math.Easing.Sine.InOut
        })

        this.isOpen = true;
    }

    // Hide entire settings menu
    hide(){

        if (!this.isOpen){
            return;
        }
        const {width} = this.scene.scale;

        this.scene.tweens.add({
            targets: this.container,
            x: width + 300,
            duration: 300,
            ease: Phaser.Math.Easing.Sine.InOut
        })

        this.isOpen = false;
    }


}