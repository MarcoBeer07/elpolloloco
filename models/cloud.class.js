class Cloud extends MovableObject {
    y = 0;
    height = 380;
    width = 300;


    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 500;

        this.animate();

    }



    animate() {
        setInterval(() => {
            this.x -= 0.2;
        }, 1800 / 60)
    }
}