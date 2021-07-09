import Phaser from 'phaser'

class Road extends Phaser.GameObjects.Image{
    constructor(obj){
        let scene = obj.scene 
        super(scene,400,300,'road')

        this.scene = scene
        this.emitter = obj.emitter 
        this.setInteractive()
        this.scene.add.existing(this)
        this.scrollFactorY = 1
        this.rightLaneM = 530
        this.leftLaneM  = 270
        this.mid = 397
        // let rightLaneR = 
        // let rightLaneL = 
        // let leftLaneR  = 
        // let leftLaneL  = 
        this.eventEmitter()
        
    }

    eventEmitter(){

        this.on('pointerdown',(pointer)=>{
             if(pointer.position.x > this.leftLaneM && pointer.position.x > this.mid){
                this.emitter.emit('switchRight')
            }
            else if(pointer.position.x < this.rightLaneM){
                this.emitter.emit('switchLeft')
            }
         })

        this.eventListener()

    }

    eventListener(){
        this.emitter.on('disableInteractive',()=>{
            this.disableInteractive()
        })
    }

}
export default Road