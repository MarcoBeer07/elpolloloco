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
    endbossWalkingSound = new Audio('./audio/running.mp3');
    bossfightSound = new Audio('./audio/endbossMusic.mp3');
    endbossHurtSound = new Audio('./audio/endbossHurt.mp3');
    endbossDeadSound = new Audio('./audio/endbossDead.mp3');
    winSound = new Audio('./audio/winSound.wav');

    startBossFight = false;
    bottleThrow = true;
    victory = false;


    constructor(world) {
        super().loadImage(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DAMAGE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.checkForBossFight();
        this.startBossfight();
        this.endbossStartAnimation();
        this.endbossDeadAnimation();
        this.endbossHurtAnimation();
        this.winnedBossFight();
        this.world = world;
        this.bossfightSound.volume = 0.2;
        this.endbossWalkingSound.volume = 0.15;
        this.winSound.volume = 0.4;
        this.winSound.loop = true;
        this.energy = 100;
        this.height = 400;
        this.width = 350;
        this.y = 60;
        this.x = 10000;
        this.speed = 10;
    }

    endbossStartAnimation() {
        let i = 0;
        this.enbossAnimation = setInterval(() => {
            if (this.startBossFight) {
                if (i < 30 && !this.bossHitted) {
                    this.endbossWalking();
                    this.bottleThrow = false;
                } else if (i > 30 && i < 55 && !this.bossHitted) {
                    this.playAnimation(this.IMAGES_IDLE);
                    this.endbossWalkingSound.pause();
                } else if (i > 55 && i < 60 && !this.bossHitted) {
                    this.playAnimation(this.IMAGES_DAMAGE);
                    this.endbossHurtSound.play();
                } else if (i > 60) {
                    this.enbossAttacking();
                }
                i++;
            }
        }, 150)
    }

    endbossDeadAnimation() {
        this.endbossDefeated = setInterval(() => {
            if (this.bossDead && !this.victory) {
                this.endbossDead();
                this.endbossDeadSound.play();
                setTimeout(() => {
                    this.victory = true
                }, 5000);
            }
        }, 150)
    }

    winnedBossFight() {
        this.winnedFight = setInterval(() => {
            if (this.victory) {
                this.bossfightSound.pause();
                this.endbossDeadSound.pause();
                this.winGame();
                clearInterval(this.winnedFight);
            }
        }, 150)
    }

    winGame() {
        this.winSound.play();
        clearInterval(world.character.characterMovement);
        document.getElementById('win-screen').classList.remove('d-none');
    }

    endbossHurtAnimation() {
        setInterval(() => {
            if (this.bossHitted && !this.bossDead) {
                this.endbossHitted();
                this.endbossHurtSound.play();
            }
        }, 150)
    }

    checkForBossFight() {
        setInterval(() => {
            if (world.character.x < 9380) {
                clearInterval(this.endbossAnimation);
            } else if (world.character.x > 9380) {
                this.startBossFight = true;
                gameSound.pause();
            }
        }, 150);
    }

    startBossfight() {
        this.bossfightMusic = setInterval(() => {
            if (this.startAttacking) {
                this.startBossfightMusic();
                this.bottleThrow = true;
                clearInterval(this.bossfightMusic);
            } else if (this.victory) {
                this.bossfightSound.pause();
            }
        }, 150);
    }

    startBossfightMusic() {
        this.bossfightSound.play();
        clearInterval(this.bossfightMusic);
    }

    endBossDeadSound() {
        this.endbossDeadSound.play();
        setTimeout(() => {
            this.endbossDeadSound.pause();
        }, 4000);
    }

    endbossWalking() {
        this.playAnimation(this.IMAGES_WALKING);
        this.endbossWalkingSound.play();
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
        this.startAttacking = false;
    }
}