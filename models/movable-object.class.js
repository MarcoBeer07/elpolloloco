/**
 * Class for all objects that are moving on the canvas
 */
class MovableObject extends DrawableObject {
    speed;
    speedY = 0;
    acceleration = 1;
    otherDirection = false;
    energy;
    lastHit = 0;

    /**
     *  Let the chosen object jump through the air with falling back to the ground 
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     *  Checks if the chosen object is on the ground or in the air
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) { // Throwable objects should always fall
            return true;
        } else {
            return this.y < 185;
        }
    }

    /**
     *  Gives the objects collision detection. So its posible to check if the objects colliding with each other
     */
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height;
    }

    /**
     *  Cut the chosen Damage from the object if its colliding  
     */
    hit(damage) {
        this.energy -= damage;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     *  Checks if the object is dead - health zero 
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     *  checks if the object is hitted and reset the hit
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms 
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 1.2;
    }

    /**
     *  Sets the animation of the chosen images from 0 to x
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 5 % 6; => 0, Rest 5 // i= 0,1,2,3,4,5,6 repeat 0,1,2,3,4,5,6,...
        let path = images[i]
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     *  Sets the speed of getting in the air when jumping
     */
    jump() {
        this.speedY = 15;
    }

    /**
     *  Checks if the chosen object is colliding with the top of another chosen object
     */
    jumpsOnTop(jo) {
        return this.y + this.height > jo.y &&
            this.y + this.height < jo.y + jo.height &&
            this.x + this.width > jo.x &&
            this.x + this.width < (jo.x + jo.width + 50);
    }

    /**
     *  Let the Object move right
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    /**
     *  Let the Object move left
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     *  Clears the endboss from the canvas if he is dead
     */
    clearDeadBoss() {
        setInterval(() => {
            this.height -= this.speed;
            this.width -= this.speed;
            setTimeout(() => {
                this.y = 0;
            }, 1200);
        }, 5000 / 60);
    }
}