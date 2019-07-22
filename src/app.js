import {tweenManager} from 'pixi-tween';
import ReelController from './Controllers/ReelController';
import ButtonsController from './Controllers/ButtonsController';
import Settings from './settings';
import './store';
const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: Settings().MainBackgroundColor, resolution: window.devicePixelRatio || 1,
}); document.body.appendChild(app.view);

const Reels = new ReelController();
const StartBtn = new ButtonsController();

app.stage.addChild(
    Reels.createReels(),
    StartBtn.StartBtn(app)
);

const top = new PIXI.Graphics();
    top.beginFill(Settings().MainBackgroundColor);
    top.drawRect(0, 0, app.screen.width, 150);

const bottom = new PIXI.Graphics();
    bottom.beginFill(Settings().MainBackgroundColor);
    bottom.drawRect(0, 450, app.screen.width, 530);
 
app.stage.addChild(top);
app.stage.addChild(bottom);

app.ticker.add(function(delta) {
    PIXI.tweenManager.update();
});

console.log(app.stage)

        

