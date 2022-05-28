class HealthBar extends DrawableObject {


    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/20_1.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 25;
        this.y = 20;
        this.height = 45;
        this.width = 160;
        this.setPercentageHealth(100);
    }
}