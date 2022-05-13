class BackgroundObject extends MovableObject {

    height = 750;
    width = 550;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = -70;

        //600 - this.height; // 480 - 400
    }
}