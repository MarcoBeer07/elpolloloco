class World {
    character = new Character();
    throwableObjects = new ThrowableObject();
    healthBar = new HealthBar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();
    chicken = new Chicken();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    collectedBottle = 'bottle';
    collectedCoin = 'coin';
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
            this.checkCollisionsCharacterWithChickens();
            this.checkThrowObjects();
        }, 120);
        setInterval(() => {
            this.checkCollisionsCharacterWithBottles();
            this.checkCollisionsCharacterWithCoins()
            this.checkCollisionsBottleWithChickens()
        }, 10);
        setInterval(() => {
            this.checkCollisionsBottleWithChickens()
        }, 5000);

    }

    checkThrowObjects(index) {
            if (this.keyboard.ENTER && this.bottleBar.bottles.length > 0) {
                let bottle = new ThrowableObject(this.character.x + 20, this.character.y + 100)
                this.throwedBottles.push(bottle);
                this.bottleBar.bottles.splice(index, 1)
                this.bottleBar.percentage -= 20;
                this.bottleBar.setPercentageBottle(this.bottleBar.percentage);
            }
        }
        //for testing
        /*checkThrowObjects() {
            if (this.keyboard.ENTER) {
                let bottle = new ThrowableObject(this.character.x + 20, this.character.y + 100)
                this.throwedBottles.push(bottle);
            }
        }*/

    checkCollisionsCharacterWithChickens() {
        this.level.chickens.forEach((chicken) => {
            if (this.character.isColliding(chicken) && chicken.bottleHitsChicken == false && !this.character.isAboveGround()) {
                this.character.hit();
                this.healthBar.setPercentageHealth(this.character.energy);
                console.log('Character trifft Gegner');
            } else if (this.character.jumpsOnTop(chicken)) {
                chicken.bottleHitsChicken = true;
            }
        });
    }

    checkCollisionsBottleWithChickens() {
        this.level.chickens.forEach(chicken => {
            this.throwedBottles.forEach(bottle => {
                if (bottle.isColliding(chicken)) {
                    console.log('Flasche trifft Gegner');
                    bottle.bottleHitsEnemy = true;
                    chicken.bottleHitsChicken = true;
                    this.removeSplashedBottle()
                    setTimeout(() => {
                        chicken.y = 500;
                    }, 3000);
                }
            });
        });
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

    checkCollisionsCharacterWithCoins() {
        this.level.collectableCoins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.collectableCoins.splice(index, 1);
                this.updateCoinbar();
            } else if (this.coinBar.coins.length >= 5 && this.character.energy < 100) {
                this.addHealthtoCharacter();
                this.resetCoinbar();
            }
        });
    }

    updateCoinbar(index) {
        this.level.collectableCoins.splice(index, 1);
        this.coinBar.percentage += 20;
        this.coinBar.setPercentageCoin(this.coinBar.percentage);
        this.coinBar.coins.push(this.collectedCoin);
    }

    addHealthtoCharacter() {
        this.character.energy += 20;
        this.healthBar.setPercentageHealth(this.character.energy);
    }

    resetCoinbar() {
        this.coinBar.percentage -= 100;
        this.coinBar.setPercentageCoin(this.coinBar.percentage);
        this.coinBar.coins.splice(0);
    }

    removeSplashedBottle() {
        setTimeout(() => {
            this.throwedBottles.splice(0, 1);
        }, 350);
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
        this.addToMap(this.coinBar);
        // Space for fixed objects
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.collectableObject);
        this.addObjectsToMap(this.level.collectableCoins);
        this.addObjectsToMap(this.level.chickens);
        this.addObjectsToMap(this.level.endboss);
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