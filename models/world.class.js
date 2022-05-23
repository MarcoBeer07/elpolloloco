class World {
    throwableObjects = new ThrowableObject();
    healthBar = new HealthBar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();
    chicken = new Chicken();
    endboss = new Endboss();
    character = new Character();

    bossBar = new EndbossBar();
    level = level1;
    canvas;
    ctx;
    keyboard = new Keyboard();
    camera_x = 0;
    collectedBottle = 'bottle';
    collectedCoin = 'coin';
    throwedBottles = [];
    collectedBottles = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, ];



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
            this.checkCollisionsCharacterWithEndboss()
            this.checkThrowObjects();
        }, 120);
        setInterval(() => {
            this.checkCollisionsCharacterWithBottles();
            this.checkCollisionsCharacterWithCoins();
            this.checkCollisionsBottleWithChickens();

        }, 10);
        setInterval(() => {
            this.checkCollisionsBottleWithEndboss();
            this.setBossAnimation();
        }, 10);


    }

    checkThrowObjects(index) {
        if (this.keyboard.ENTER && this.collectedBottles.length > 0) {
            let bottle = new ThrowableObject(this.character.x + 20, this.character.y + 100)
            this.throwedBottles.push(bottle);
            this.collectedBottles.splice(index, 1)
        }
    }


    //for testing
    /* checkThrowObjects() {
         if (this.keyboard.ENTER) {
             let bottle = new ThrowableObject(this.character.x + 20, this.character.y + 100)
             this.throwedBottles.push(bottle);
         }
     }*/

    checkCollisionsCharacterWithChickens() {
        this.level.chickens.forEach((chicken) => {
            if (this.character.isColliding(chicken) && chicken.bottleHitsChicken == false && !this.character.isAboveGround()) {
                this.character.hit(3);
                this.healthBar.setPercentageHealth(this.character.energy);
            } else if (this.character.jumpsOnTop(chicken)) {
                chicken.bottleHitsChicken = true;
                setTimeout(() => {
                    chicken.y = 500;
                }, 3000);
            }
        });
    }

    checkCollisionsCharacterWithEndboss() {
        this.level.endboss.forEach(endboss => {
            if (this.character.isColliding(endboss)) {
                this.character.hit(10);
                this.healthBar.setPercentageHealth(this.character.energy);
            }
        })
    }

    checkCollisionsBottleWithChickens() {
        this.level.chickens.forEach(chicken => {
            this.throwedBottles.forEach(bottle => {
                if (bottle.isColliding(chicken) && !chicken.bottleHitsChicken) {
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

    checkCollisionsBottleWithEndboss() {
        this.level.endboss.forEach(endboss => {
            this.throwedBottles.forEach(bottle => {
                if (bottle.isColliding(endboss)) {
                    bottle.bottleHitsEnemy = true;
                    endboss.bossHitted = true;
                    this.removeSplashedBottle()
                    this.endboss.hit(10);
                    this.bossBar.setPercentageHealth(this.endboss.energy);

                } else if (this.endboss.energy == 0) {
                    bottle.bottleHitsEnemy = true;
                    endboss.bossDead = true;
                    this.removeSplashedBottle()
                }
            });
        });
    }



    checkCollisionsCharacterWithBottles() {
        this.level.collectableBottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.collectableBottles.splice(index, 1);
                this.collectedBottles.push(this.collectedBottle);
            }
        });
    }

    checkCollisionsCharacterWithCoins() {
        this.level.collectableCoins.forEach((coin, index) => {
            if (this.character.isColliding(coin) && this.coinBar.coins.length < 5) {
                this.level.collectableCoins.splice(index, 1);
                this.updateCoinbar();
            } else if (this.coinBar.coins.length >= 5 && this.character.energy < 100) {
                this.addHealthtoCharacter();
                this.resetCoinbar();
            }
        });
    }

    updateCoinbar() {
        this.level.collectableCoins.splice(1, 0);
        this.coinBar.percentage += 20;
        this.coinBar.setPercentageCoin(this.coinBar.percentage);
        this.coinBar.coins.push(this.collectedCoin);
    }

    addHealthtoCharacter() {
        this.character.energy = 100;
        this.healthBar.setPercentageHealth(this.character.energy);
    }

    resetCoinbar() {
        this.coinBar.percentage -= 100;
        this.coinBar.setPercentageCoin(this.coinBar.percentage);
        this.coinBar.coins.splice(0);
    }

    removeSplashedBottle() {
        setTimeout(() => {
            this.throwedBottles.splice(1, 0);
        }, 100);
    }
    setBossAnimation() {
        if (this.character.x >= 8500) {
            this.endboss.startBossAnimation = true;
        }
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
        this.drawBottleCounter();
        if (this.character.x >= 8500) {
            this.addToMap(this.bossBar);
        }
        // Space for fixed objects
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.collectableBottles);
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

    drawBottleCounter() {
        this.ctx.font = '20px serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.collectedBottles.length, 44.5, 158);
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