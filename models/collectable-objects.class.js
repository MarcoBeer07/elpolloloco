class CollectableObject extends DrawableObject {


    IMAGES_SALSA_TO_COLLECT = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ]

    constructor() {
        super().loadImage('img/6.botella/2.Botella_enterrada1.png');
        this.x = 200 + Math.random() * 4000; // Zahl zwischen 200 und 700
        this.width = 90;
        this.height = 80;
        this.y = 330;
    }



}