/**
 * Class for all objects that are moving on the canvas
 */
class MovableObject {
    x = 120;
    y = 250;
    img;
    height = 150;
    width = 150;

    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image')
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {

    }
}