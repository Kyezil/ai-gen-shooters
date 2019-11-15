import { BUG_COLOR, BUG_SIZE, BULLET_SPEED } from './const.js'

export class Bug extends PIXI.Container{
    constructor() {
        super()
        
        const body = new PIXI.Graphics()
            .beginFill(BUG_COLOR)
            .drawCircle(0, 0, BUG_SIZE)
            .endFill()
            .beginFill(0x123456)
            .drawCircle(BUG_SIZE-10, 0, 10)
            .endFill()

        this.addChild(body)
    }

    generateBullet() {
        const bullet = new Bullet()
        bullet.position.x = this.position.x + BUG_SIZE*Math.cos(this.rotation)
        bullet.position.y = this.position.y + BUG_SIZE*Math.sin(this.rotation)
        bullet.rotation = this.rotation
        return bullet
    }
}

export class Bullet extends PIXI.Graphics {
    constructor() {
        super()
        this.beginFill(0x123456)
            .drawRoundedRect(0, 0, 20, 10, 5)
            .endFill()
    }

    animate(dt) {
        this.position.x += BULLET_SPEED*Math.cos(this.rotation)*dt
        this.position.y += BULLET_SPEED*Math.sin(this.rotation)*dt
    }
}