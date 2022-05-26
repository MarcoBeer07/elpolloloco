class CollectableBottles extends MovableObject {


    IMAGES_SALSA_TO_COLLECT = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];

    constructor(x, k) {
        super().loadImage(this.IMAGES_SALSA_TO_COLLECT[k]);
        this.loadImages(this.IMAGES_SALSA_TO_COLLECT);
        this.x = x;
        this.width = 90;
        this.height = 80;
        this.y = 350;
    }


}