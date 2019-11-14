import { Bug } from './bug.js'

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

const bug1 = new Bug()
bug1.position.x = 100
bug1.position.y = 100


app.ticker.add(function(delta) {

});