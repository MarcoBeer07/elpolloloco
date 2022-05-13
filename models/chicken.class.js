class Chicken extends MovableObject {
    y = 350;
    height = 60;
    width = 50;
    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.x = 200 + Math.random() * 500; // Zahl zwischen 200 und 700

        this.animate();
    }
    animate() {
        setInterval(() => {
            this.x -= 5;
        }, 1000)
    }
}