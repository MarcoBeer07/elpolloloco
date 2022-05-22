class EndbossBar extends DrawableObject {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/verde/boss_00.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/boss_20.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/boss_40.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/boss_60.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/boss_80.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/boss_100.png',


    ];
    percentage = 100;
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 490;
        this.y = 3;
        this.height = 78;
        this.width = 280;
        this.setPercentageEndboss(100);

    }

    setPercentageEndboss(percentage) {
        this.percentage = percentage; // => 0 ... 5 
        let path = this.IMAGES[this.resolveImageIndexEndboss()];
        this.img = this.imageCache[path];
    }

    resolveImageIndexEndboss() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

}