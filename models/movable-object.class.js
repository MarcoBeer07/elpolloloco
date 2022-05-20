/**
 * Class for all objects that are moving on the canvas
 */
class MovableObject extends DrawableObject {
    speed;
    speedY = 0;
    acceleration = 1;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    bossAnimation = false;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);

    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable objects should always fall
            return true;
        } else {
            return this.y < 185;
        }
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
        console.log(this.energy)
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms 
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1.2;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 5 % 6; => 0, Rest 5 // i= 0,1,2,3,4,5,6 repeat 0,1,2,3,4,5,6,...
        let path = images[i]
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 15;
    }

    jumpsOnTop(mo) {
        return this.y + this.height > mo.y &&
            this.y + this.height < mo.y + mo.height &&
            this.x + this.width > mo.x &&
            this.x + this.width < (mo.x + mo.width + 50);
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
    }
}