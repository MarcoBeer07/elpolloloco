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
    otherDirection = false;


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

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60)
    }
}