import StartAnim from './AnimController';
export default class ButtonsController {
	constructor() {
       this.start = new StartAnim();
    }
    
 

    
    StartBtn(app) {
        var textureButton = PIXI.Texture.from('assets/images/spin.png');
        var button = new PIXI.Sprite(textureButton);
        button.buttonMode = true;
        button.anchor.set(0.5);
        button.x = 720;
        button.y = 300;
        button.width = 100;
        button.height = 100;
        // make the button interactive...
        button.interactive = true;
        button.buttonMode = true;
        button.on('pointerdown',() => {
            this.start.AnimateReels(app);
        })
     
        return button;
    }
   
    
}