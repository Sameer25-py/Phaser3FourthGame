import Phaser from 'phaser'

class Obstacle extends Phaser.Physics.Arcade.Sprite{

    constructor(obj){
        let scene = obj.scene
        let world = obj.world
        let key = obj.key
        let x = obj.x

        super(scene,x,30,key)
        this.setScale(0.2)

        this.scene = scene
        this.world = world

        this.world.enable(this)
        this.scene.add.existing(this)

        this.leftLaneMiddle = 270
        this.rightLaneMiddle = 535

        this.body.setCollideWorldBounds(true)
        this.body.setVelocityY(150)
        this.body.onWorldBounds = true
        this.eventListener()
    }   

    eventListener(){
        this.world.on('worldbounds',(body,up,down,right,left)=>{
            if(this.body === body){
                this.destroy()
            }
        })
    }

}

export default Obstacle