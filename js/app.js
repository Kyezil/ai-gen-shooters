import { Bug, Bullet } from './bug.js'

window.app = new PIXI.Application({
    antialias: true,
	autoResize: true,
    resolution: devicePixelRatio,
    backgroundColor: 0xeeeeee
});
document.querySelector('#frame').appendChild(app.view);

// Listen for window resize events
window.addEventListener('resize', resize);
// Resize function window
function resize() {
	const parent = app.view.parentNode;
	app.renderer.resize(parent.clientWidth, parent.clientHeight);
//    rect.position.set(app.screen.width, app.screen.height);
}
resize();

function rotateToPoint(mx, my, px, py){  
    const dist_Y = my - py;
    const dist_X = mx - px;
    const angle = Math.atan2(dist_Y,dist_X);
    return angle;
}

const bug1 = new Bug()
bug1.position.x = 100
bug1.position.y = 100
bug1.rotation = 0.3
window.app.stage.addChild(bug1)

let bullet = bug1.generateBullet()
window.app.stage.addChild(bullet)

app.ticker.add(function(delta) {
    bullet.animate(delta)
    bug1.rotation  = rotateToPoint(app.renderer.plugins.interaction.mouse.global.x,
                                   app.renderer.plugins.interaction.mouse.global.y,
                                   bug1.position.x,
                                   bug1.position.y);
});


app.renderer.plugins.interaction.on('pointerup', function() {
    bullet.destroy()
    bullet = window.app.stage.addChild(bug1.generateBullet())
});