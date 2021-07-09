import Phaser from 'phaser';
import MainScene from './MainScene.js'
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-game',
    width: 800,
    height: 600,
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    loader:{
        baseURL: 'src/',
        path: 'assets/'
    },
    physics:{
        default: 'arcade',
        arcade:{debug: true,}
        },

    scene: [MainScene]
};

const game = new Phaser.Game(config);

export default game
