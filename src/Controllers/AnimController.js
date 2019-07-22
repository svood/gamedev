import { log } from "util";
import Settings from '../settings';
import {SpinStart,spinEnd,FastSpeen} from '../actions/SpinAction';

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




    TweenSymbols(element, i,length,j) {
        console.log(length)
        const tween = PIXI.tweenManager.createTween(element);
        tween.from({ y: element.y }).to({ y: element.y + 100 })
        tween.time = Settings().ReelsSpeed;
        tween.repeat = (i === 0) ? 7 : 13 * i;
        //tween.easing = PIXI.tween.Easing.outElastic()
        tween.on('repeat', (loopCount) => {
            tween.time = this.props.getState().SpinReduser.spinspeed,
            tween.from({ y: element.y }).to({ y: element.y + 100 })
        });
        tween.on('update', () => { this.ReloadReel(element) });
        tween.on('end', () => {
            element.filters = [];
        
            if (j === (length * 5)-1 ) {
                this.props.dispatch(FastSpeen(50))
                this.props.dispatch(spinEnd())
            }
        });
        return tween;
    }

    AnimateReels(app) {
        if (this.props.getState().SpinReduser.animation === false) {
            this.props.dispatch(SpinStart())
            var i = 0;
            var j = 0;
            app.stage.children[0].children.forEach(r => {
                r.children.forEach(element => {
                    var length = r.children.length;
                    element.filters = [this.blurFilter1];
                    this.TweenSymbols(element, i,length,j).start()
                   j++;
                });
                i++;
            });
        } else {
            
            this.props.dispatch(FastSpeen(25))
           // console.log('W8 for spinning end')
        }

    }

}