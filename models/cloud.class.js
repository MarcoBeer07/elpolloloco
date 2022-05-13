class Cloud extends MovableObject {
    y = 0;
    height = 380;
    width = 300;


    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 500;
    }
}