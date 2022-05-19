class World {
    character = new Character();
    throwableObjects = new ThrowableObject();
    healthBar = new HealthBar();
    bottleBar = new BottleBar();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    collectedBottle = 'bottle';
    throwedBottles = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;

        this.draw();
        this.setWorld();
        this.run();

    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisionsCharacterWithEnemy();
            this.checkThrowObjects();
        }, 120);
        setInterval(() => {
            this.checkCollisionsCharacterWithBottles();
            this.checkCollisionsBottleWithEnemy()
        }, 10);
        setInterval(() => {
            this.checkCollisionsBottleWithEnemy()
        }, 5000);

    }

    //checkThrowObjects(index) {
    //if (this.keyboard.ENTER && this.bottleBar.bottles.length > 0) {
    //let bottle = new ThrowableObject(this.character.x + 20, this.character.y + 100)
    //this.throwableObject.push(bottle);
    //this.bottleBar.bottles.splice(index, 1)
    //this.bottleBar.percentage -= 20;
    //this.bottleBar.setPercentageBottle(this.bottleBar.percentage);
    //}
    //}
    //for testing
    checkThrowObjects() {
        if (this.keyboard.ENTER) {
            let bottle = new ThrowableObject(this.character.x + 20, this.character.y + 100)
            this.throwedBottles.push(bottle);
        }
    }

    checkCollisionsCharacterWithEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.healthBar.setPercentageHealth(this.character.energy);
                console.log('Character trifft Gegner');
            }
        });
    }

    checkCollisionsBottleWithEnemy() {
        this.level.enemies.forEach(enemy => {
            this.throwedBottles.forEach(bottle => {
                if (bottle.isColliding(enemy)) {
                    console.log('Flasche trifft Gegner');
                    bottle.bottleHitsEnemy = true;
                    this.removeSplashedBottle()
                    console.log(this.throwableObjects.bottleHitsEnemy);
                }
            });
        });
    }

    removeSplashedBottle() {
        setTimeout(() => {
            this.throwedBottles.splice(0, 1);
        }, 350);
    }

    checkCollisionsCharacterWithBottles() {
        this.level.collectableObject.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.collectableObject.splice(index, 1);
                this.bottleBar.percentage += 20;
                this.bottleBar.setPercentageBottle(this.bottleBar.percentage);
                this.bottleBar.bottles.push(this.collectedBottle);
            }
        });
    }




    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        // Space for fixed objects 
        this.addToMap(this.healthBar);
        this.addToMap(this.bottleBar);
        // Space for fixed objects
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.collectableObject);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwedBottles);

        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder aufgerufen 
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}