import Settings from '../settings';
export default class ReelController {
	constructor() {
        this.ReelsContainer = new PIXI.Container();
        this.ReelsContainer.x = 30;
        this.ReelsContainer.y = 50;
 
    
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

    createReels() {
 

        for (var i = 0; i < Settings().ReelsAmount;i++) {
            var new_reel =  new PIXI.Container();

            new_reel.x = i * Settings().ReelsMarging;

            for (var j = 0; j < 5; j++) {
                const symbol = new PIXI.Sprite.from(this.slotTextures[this.randomInteger(0,2)]);
                symbol.width = symbol.height  = 100;
                symbol.y = j * 100;
                symbol.name =  j;
                new_reel.addChild(symbol);
            }


            this.ReelsContainer.addChild(new_reel);
        }

        return  this.ReelsContainer;
    }
   
    
}