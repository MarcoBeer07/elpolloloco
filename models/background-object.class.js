class BackgroundObject extends MovableObject {

    height = 480;
    width = 721;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 0;
    }
}