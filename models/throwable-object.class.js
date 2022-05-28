class ThrowableObject extends MovableObject {


    IMAGES_SALSA = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png',
    ]
    IMAGES_SALSA_SPLASH = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ]
    world;
    bottleHitsEnemy = false;


    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_SALSA);
        this.loadImages(this.IMAGES_SALSA_SPLASH);
        this.throw();
        this.bottleAnimation();
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 60;
    }

    /**
     *  Makes the object throwable with a specific speed 
     */
    throw () {
        this.speedY = 18;
        this.applyGravity();
        setInterval(() => {
            this.x += 7;
        }, 25);
    }

    /**
     * Sets the Invertal for the different anmimations of the bottles
     */
    bottleAnimation() {
        setInterval(() => {
            if (this.bottleHitsEnemy) {
                this.stopBottleAndSplash();
            }
        }, 100 / 60);
        setInterval(() => {
            if (!this.bottleHitsEnemy) {
                this.spinBottle();
            }
        }, 8000 / 60);
        this.bottleHitsEnemy = false;
    };

    /**
     * Stops the bottle when colliding an object and plays the splash animation
     */
    stopBottleAndSplash() {
        this.playAnimation(this.IMAGES_SALSA_SPLASH);
    }

    /**
     * Plays the spin animation of the bottle 
     */
    spinBottle() {
        this.playAnimation(this.IMAGES_SALSA);
    }
}