class World {
    character = new Character();
    throwableObjects = new ThrowableObject();
    level = level1;
    //enemies = level1.enemies;
    //clouds = level1.clouds;
    //backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObject = [];

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
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.ENTER) {
            let bottle = new ThrowableObject(this.character.x + 20, this.character.y + 100)
            this.throwableObject.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
                console.log('Character trifft Gegner');
            } else if (this.throwableObjects.isColliding(enemy)) {
                console.log('Flasche trifft Gegner');
                setInterval(() => {
                    this.playAnimation(this.IMAGES_SALSA_SPLASH);
                }, 8000 / 60)
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
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);


        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);



        this.addObjectsToMap(this.throwableObject);


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
        this.ctx.translate(mo.width - 120, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}