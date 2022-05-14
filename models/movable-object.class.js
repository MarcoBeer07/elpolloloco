/**
 * Class for all objects that are moving on the canvas
 */
class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed;
    speedY = 0;
    acceleration = 1;
    otherDirection = false;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);

    }

    isAboveGround() {
        return this.y < 180;
    }

    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image')
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png, 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })

    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i = 5 % 6; => 0, Rest 5 // i= 0,1,2,3,4,5,6 repeat 0,1,2,3,4,5,6,...
        let path = images[i]
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 10
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
    }
}