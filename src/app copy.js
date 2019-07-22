import {tweenManager} from 'pixi-tween';

const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);

const Reel = new PIXI.Container();
var animation = false;
const slotTextures = [
    PIXI.Texture.from('assets/images/1.png'),
    PIXI.Texture.from('assets/images/2.png'),
    PIXI.Texture.from('assets/images/3.png'),
];


    var textureButton = PIXI.Texture.from('https://dl.dropboxusercontent.com/s/mi2cibdajml8qj9/arrow_wait.png?dl=0');
    var button = new PIXI.Sprite(textureButton);
    button.buttonMode = true;
    button.anchor.set(0.5);
    button.x = 200;
    button.y = 200;
    // make the button interactive...
    button.interactive = true;
    button.buttonMode = true;
    button.on('pointerdown', start)

app.stage.addChild(button);


    for (var i = 0; i < 5; i++) {
        const symbol = new PIXI.Sprite.from(slotTextures[randomInteger(0,2)]);
        symbol.width = symbol.height  = 100;
        symbol.y = i * 100;
        symbol.name =  i;
        Reel.addChild(symbol);
    }

    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }


function ReloadReel (element) {
     animation = false;

    if (element.y >= 500) {
        element.texture = (slotTextures[randomInteger(0,2)]);
        element.y = 0;
    } 
     
   

    
}



function AnimateReel (from,to) {
    animation = true;
    console.log(Reel.children)

    
         Reel.children.forEach(element => {
            const tween = PIXI.tweenManager.createTween(element);
            tween.from({ y: element.y }).to({ y: element.y+100 })
            tween.time = 50;
            tween.repeat = 10;

            tween.on('repeat', ( loopCount ) => {
                tween.from({ y: element.y }).to({ y: element.y+100 })
            });

            tween.on('update', () => { ReloadReel(element) });
            tween.on('end', () => { console.log("ENDED")});
            tween.start();
        });
  
       
   
    
    
}



function start () {
    if (!animation) {
            AnimateReel(0,100)  
    }
}




app.ticker.add(function(delta) {
    PIXI.tweenManager.update();
});

app.stage.addChild(Reel);


        

console.log('Hello World')