class Chicken extends MovableObject {

    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ];

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.width = 50;
        this.height = 60;
        this.y = 350;

        this.x = 600 + Math.random() * 1200; // Zahl zwischen 200 und 700
        this.speed = 0.25 + Math.random() * 0.25;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();

        }, 1000 / 60)
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);

        }, 8000 / 60)

    }




}