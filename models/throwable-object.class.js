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
    bottleThrowSound = new Audio('audio/throw.mp3');


    constructor(x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png');
        this.loadImages(this.IMAGES_SALSA);
        this.loadImages(this.IMAGES_SALSA_SPLASH);
        this.throw();
        this.bottleAnimation();
        this.bottleThrowSound.volume = 0.4;
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 60;
    }

    throw () {
        this.bottleThrowSound.play();

        this.speedY = 18;
        this.applyGravity();
        setInterval(() => {
            this.x += 7;
        }, 25);
    }

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

    stopBottleAndSplash() {
        this.playAnimation(this.IMAGES_SALSA_SPLASH);
    }

    spinBottle() {
        this.playAnimation(this.IMAGES_SALSA);
    }

}