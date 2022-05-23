class CoinBar extends DrawableObject {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png',
    ];

    percentage = 0;
    coins = [];
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 195;
        this.y = 20;
        this.height = 45;
        this.width = 160;
        this.setPercentageCoin(0);
    }

    setPercentageCoin(percentage) {
        this.percentage = percentage; // => 0 ... 5 
        let path = this.IMAGES[this.resolveImageIndexCoin()];
        this.img = this.imageCache[path];
    }

    resolveImageIndexCoin() {
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