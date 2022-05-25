class Endboss extends MovableObject {
    IMAGES_WALKING = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',

    ];

    IMAGES_IDLE = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];

    IMAGES_DAMAGE = [

        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
    ];

    IMAGES_DEAD = [

        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
    ];

    IMAGES_ATTACK = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
    ];
    contactWithBoss = false;
    bossHitted = false;
    bossDead = false;
    startAttacking = false;
    speed = 2000;
    walking_sound = new Audio('audio/running.mp3');
    bossfightSound = new Audio('audio/endboss.mp3');


    constructor(world) {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DAMAGE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.world = world;
        this.animate();
        this.bossfightSound.volume = 0.3;
        this.energy = 100;
        this.height = 400;
        this.width = 350;
        this.y = 60;
        this.x = 10000;
        this.speed = 10;
    }

    animate() {
        let i = 0;
        this.enbossAnimation = setInterval(() => {
            if (i < 30 && !this.bossHitted && !this.bossDead) {
                this.endbossWalking();
            } else if (i > 30 && i < 55 && !this.bossHitted && !this.bossDead) {
                this.playAnimation(this.IMAGES_IDLE);
            } else if (i > 55 && i < 60 && !this.bossHitted && !this.bossDead) {
                this.playAnimation(this.IMAGES_DAMAGE);
            } else if (i > 60 && !this.bossHitted && !this.bossDead) {
                this.enbossAttacking();
            } else if (this.bossHitted && !this.bossDead) {
                this.endbossHitted();
            } else if (this.bossDead) {
                this.endbossDead();
            };
            i++;
            if (world.character.x > 9000 && !this.contactWithBoss) {
                i = 0;
                this.contactWithBoss = true;
                this.world.gameSound.pause();
                clearInterval(world.character.characterMovement);
                setTimeout(() => {
                    this.world.character.animate();
                    this.bossfightSound.play();
                    this.bossfightSound.loop = true;
                }, 10000);
            }
        }, 150)
    }

    endbossWalking() {
        this.playAnimation(this.IMAGES_WALKING);
        this.moveLeft();
    }

    enbossAttacking() {
        this.playAnimation(this.IMAGES_ATTACK);
        this.startAttacking = true;
    }

    endbossHitted() {
        this.playAnimation(this.IMAGES_DAMAGE);
        setTimeout(() => {
            this.bossHitted = false;
        }, 1500);
    }

    endbossDead() {
        this.playAnimation(this.IMAGES_DEAD);
        this.clearDeadBoss();
    }

}
//this.world.character.x > 8500 &&