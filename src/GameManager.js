import Phaser from 'phaser'
import Obstacle from './Obstacles.js'

class GameManager{
    constructor(obj){
        
        this.scene = obj.scene
        this.world = obj.world
        this.Player = obj.Player
        this.active = false
        this.timer =  2000
        this.emitter = obj.emitter
        this.road = obj.road

        this.obstaclePositions = [270,535]
        this.keys = ['police','taxi']
    }   

    spawnManager(){
        
        this.scene.time.addEvent({delay:this.timer,callback:()=>{

                let obstacle  = this.spwawnObstacle()
                new Phaser.Physics.Arcade.Factory(this.world).
                collider(this.Player,obstacle,this.eventEmitter,null,this)

        },callbackScope:this.scene,loop:true})

        
    }
    spwawnObstacle(){
        
        return new Obstacle({
            scene:this.scene,
            world:this.world,
            x:this.obstaclePositions[Phaser.Math.Between(0,1)],
            key:this.keys[Phaser.Math.Between(0,1)]
            })
        
    }

    eventEmitter(obj1,obj2){
        this.Player.setTint(0xFF00FF)
        this.world.pause()
        this.emitter.emit('disableInteractive')
        this.scene.time.delayedCall(1000,()=>this.scene.scene.restart(),[],this)
    }
}


export default GameManager