import { BUG_COLOR, BUG_SIZE } from './const.js'

export class Bug extends PIXI.Container{
    constructor() {
        super()
        
        const body = new PIXI.Graphics()
            .beginFill(BUG_COLOR)
            .drawCircle(0, 0, BUG_SIZE)
            .endFill()
            .beginFill(0x123456)
            .drawCircle(BUG_SIZE-5, 0, 10)
            .endFill()

        this.addChild(body)
        
        window.app.stage.addChild(this)
    }
}