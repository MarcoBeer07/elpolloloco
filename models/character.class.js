class Character extends MovableObject {

    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_IDLE = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png'

    ];

    IMAGES_LONG_IDLE = [
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png'

    ];

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
    ];

    IMAGES_DEAD = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
    ];

    IMAGES_HURT = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];
    world;
    walking_sound = new Audio('./audio/running.mp3');
    jumpSound = new Audio('./audio/jump.mp3');
    hurtSound = new Audio('./audio/hurt.mp3');
    looseSound = new Audio('./audio/looseSound.wav');
    lastThrow = 0;
    speed = 2.2;

    constructor(world) {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.characterMovements();
        this.characterAnimation();
        this.stopCharacterAndWaitForEndboss();
        this.world = world;
        this.walking_sound.volume = 0.1;
        this.jumpSound.volume = 0.5;
        this.hurtSound.volume = 0.5;
        this.looseSound.volume = 0.3;
        this.energy = 100;
        this.height = 240;
        this.width = 90;
        this.x = 150;
        this.y = 185;
    }

    /**
     * Sets the Invertal for the different anmimations of the character movements
     */
    characterMovements() {
        this.characterMovement = setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveCharacterRight();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveCharacterLeft();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jumpSound.play();
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 100 / 60)
    }

    /**
     * Sets the Invertal for the different anmimations of the character animations
     */
    characterAnimation() {
        this.characterAnimation = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.gameOver()
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.hurtSound.play();
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            } else if (!this.world.keyboard.RIGHT || !this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_IDLE);
            } else if (!this.world.keyboard.RIGHT || !this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_LONG_IDLE);
            }
        }, 10000 / 60)
    }

    /**
     * Moves the character to the right if key D is klicked
     */
    moveCharacterRight() {
        this.moveRight();
        if (!this.isAboveGround()) {
            this.walking_sound.play();
        }
        this.otherDirection = false;
    }

    /**
     * Moves the character to the left if key A is klicked
     */
    moveCharacterLeft() {
        this.moveLeft();
        if (!this.isAboveGround()) {
            this.walking_sound.play();
        }
        this.otherDirection = true;
    }

    /**
     * Stops the charakter movement if the boss is near then after 9,3 seconds start it again 
     */
    stopCharacterAndWaitForEndboss() {
        this.stopCharacter = setInterval(() => {
            if (this.x > 9380) {
                this.walking_sound.pause();
                clearInterval(this.characterMovement);
                setTimeout(() => {
                    this.startCharacter();
                }, 9300);
                clearInterval(this.stopCharacter);
            }
        }, 100 / 60);
    }

    /**
     * Stops the charakter movement if the boss is near then after 9,3 seconds start it again 
     */
    startCharacter() {
        this.characterMovements();
    }

    /**
     * Shows the game over screen and plays game over sound when character health is 0 
     */
    gameOver() {
        clearInterval(this.characterMovement)
        gameSound.pause();
        this.looseSound.play();
        document.getElementById('game-over-screen').classList.remove('d-none');
    }

    /**
     * Returns true if timePassed > 0.5 seconds
     */
    timePassedAfterThrow() {
        return this.timerOfAction(this.lastThrow) > 1;
    }
}