class Cloud extends MovableObject {
    y = 0;
    height = 380;
    width = 300;

    constructor(x) {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = x;
        this.animate();
    }

    /**
     * Sets the Invertal for the different anmimations of clouds
     */
    animate() {
        setInterval(() => {
            this.x -= 0.2;
        }, 1800 / 60)
    }
}