class CollectableCoins extends MovableObject {
    IMAGES_COINS = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png',
    ]

    constructor(x, y) {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_COINS);
        this.x = x; // Zahl zwischen 200 und 700
        this.width = 120;
        this.height = 120;
        this.y = y;
        this.animateCoins();
    }


    animateCoins() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);

        }, 250);
    }
}