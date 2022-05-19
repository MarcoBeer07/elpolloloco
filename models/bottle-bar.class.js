class BottleBar extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    ]
    percentage = 0;
    bottles = [];
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 200;
        this.y = 20;
        this.height = 45;
        this.width = 160;
        this.setPercentageBottle(0);
    }

    setPercentageBottle(percentage) {

        this.percentage = percentage; // => 0 ... 5 
        let path = this.IMAGES[this.resolveImageIndexBottle()];
        this.img = this.imageCache[path];

    }

    resolveImageIndexBottle() {
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage <= 20) {
            return 1;
        } else if (this.percentage <= 40) {
            return 2;
        } else if (this.percentage <= 60) {
            return 3;
        } else if (this.percentage <= 80) {
            return 4;
        } else {
            return 5;
        }
    }






}