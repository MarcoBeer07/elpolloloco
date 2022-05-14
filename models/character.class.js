class Character extends MovableObject {
    speed = 2;
    height = 100;
    width = 150;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    world;

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png')
        this.loadImages(this.IMAGES_WALKING);

        this.animate();

    }

    animate() {
        setInterval(() => {
            //Walking to the right
            if (this.world.keyboard.RIGHT) {
                //Walking right
                this.x += this.speed;
                this.otherDirection = false;

            }
            //Walking to the left
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }


        }, 1000 / 60)



        setInterval(() => {

            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //Walk animation
                let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 5 % 6; => 0, Rest 5 // i= 0,1,2,3,4,5,6 repeat 0,1,2,3,4,5,6,...
                let path = this.IMAGES_WALKING[i]; //loading image from IMAGES_WALKING on point 0
                this.img = this.imageCache[path];
                this.currentImage++;
            }

        }, 8000 / 60)

    }

    jump() {

    }
}