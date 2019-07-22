import { log } from "util";
import Settings from '../settings';
export default class AnimController {
    constructor(props) {
        this.props = props;
        this.blurFilter1 = new PIXI.filters.BlurFilter();
        this.blurFilter1.blur = Settings().SymbolsBlurOnAnimation;
        this.slotTextures = [
            PIXI.Texture.from('assets/images/1.png'),
            PIXI.Texture.from('assets/images/2.png'),
            PIXI.Texture.from('assets/images/3.png'),
        ];
    }

    randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    ReloadReel(element, i, r) {
        if (element.y >= 500) {
            element.texture = (this.slotTextures[this.randomInteger(0, 2)]);
            element.width = element.height = 100;
            element.y = 0;
        }

    }




    TweenSymbols(element, i) {
        const tween = PIXI.tweenManager.createTween(element);
        tween.from({ y: element.y }).to({ y: element.y + 100 })
        tween.time = Settings().ReelsSpeed;
        tween.repeat = (i === 0) ? 7 : 13 * i;
        //tween.easing = PIXI.tween.Easing.outElastic()
        tween.on('repeat', (loopCount) => {
            tween.from({ y: element.y }).to({ y: element.y + 100 })
        });
        tween.on('update', () => { this.ReloadReel(element) });
        tween.on('end', () => { element.filters = []; });
        return tween;
    }

    AnimateReels(app) {

        var i = 0;
        app.stage.children[0].children.forEach(r => {

            r.children.forEach(element => {
                element.filters = [this.blurFilter1];
                this.TweenSymbols(element, i).start()
            });
            i++;
        });

    }

}