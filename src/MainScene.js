import Phaser, { Physics } from 'phaser'
import Player from './Player.js'
import Road from './Road.js'
import GameManager from './GameManager.js'
import game from './index.js'


class MainScene extends Phaser.Scene{
    constructor(){
        super('MainScene')
    }
    
    preload(){
        this.load.image('player','player.png')
        this.load.image('police','police.png')
        this.load.image('taxi','taxi.png')
        this.load.image('road','road.png')
    }
    
    create(){

        
        this.emitter = new Phaser.Events.EventEmitter()
        //spawn road 
        this.road = new Road({
            scene:this,
            emitter:this.emitter
        })
        //spawn player 
        this.Player = new Player({
            world:this.physics.world,
            scene:this,
            emitter: this.emitter
        })

        //gameManager
        this.gameManager = new GameManager({
            scene:this,
            world:this.physics.world,
            Player: this.Player,
            emitter: this.emitter,
            road: this.Road
        })
        
        this.gameManager.spawnManager()
        //make camera to follow player
        //this.cameras.main.startFollow(this.player)
    

    }
    
    update(){        
        this.road.tilePositionY-=10;
        
        if(this.Player.y < game.config.height/2 + 50 ) this.Player.setVelocityY(0)
    }
}

export default MainScene 