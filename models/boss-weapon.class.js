class BossWeapon extends MovableObject {
    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
    ]

    IMAGES_DEAD = [
        'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png'
    ]
    speed = 1;
    characterHitsWeapon = false;
    constructor(x, y) {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.weaponAnimation();
        this.width = 60;
        this.height = 70;
        this.x = x;
        this.y = y;

    }

    /**
     * Sets the Invertal for the different anmimations of the weapon from the endboss
     */
    weaponAnimation() {
        setInterval(() => {
            if (this.characterHitsWeapon) {
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
                this.moveLeft();
            }
        }, 100 / 60);
    }
}