import Phaser, { Physics } from 'phaser'


class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(obj){
        
        let scene = obj.scene
        let world = obj.world

        super(scene,400,560,'player').setScale(0.2)

        this.scene = scene
        this.world = world
        this.emitter = obj.emitter
        this.leftLaneMiddle = 270
        this.rightLaneMiddle = 535

        this.world.enable(this)


       this.scene.add.existing(this)

       this.body.setVelocityY(-20)

       this.eventListener()
    }

    eventListener(){

        this.emitter.on('switchLeft',()=>{
            this.x = this.leftLaneMiddle
        },this.scene)

        this.emitter.on('switchRight',()=>{
            this.x = this.rightLaneMiddle
        },this.scene)


    }
}

export default Player