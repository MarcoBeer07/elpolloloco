class World {
    throwableObjects = new ThrowableObject(this);
    healthBar = new HealthBar();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();
    chicken = new Chicken();
    bigChicken = new BigChicken();
    endboss = new Endboss(this);
    character = new Character(this);

    bossWeapon = new BossWeapon();
    bossBar = new EndbossBar();
    level = level1;
    canvas;
    ctx;
    keyboard = new Keyboard();
    camera_x = 0;
    collectedBottle = 'bottle';
    collectedCoin = 'coin';
    bottleSplash = new Audio('./audio/bottle_splash.mp3');
    chickenDead = new Audio('./audio/chicken_dead.mp3');
    coinCollected = new Audio('./audio/coin_collected.wav');
    bottleCollected = new Audio('./audio/bottle_collected.mp3');
    bottleThrowSound = new Audio('./audio/throw.mp3');


    throwedBottles = [];
    bossBullets = [];
    collectedBottles = [];



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.coinCollected.volume = 0.1;
        this.bottleCollected.volume = 0.2;
        this.chickenDead.volume = 0.6;
        this.bottleSplash.volume = 0.3;
        this.bottleThrowSound.volume = 0.4;
    }

    setWorld() {
        this.character.world = this;
    }

    /**
     * Sets the game back to the startscreen
     */
    restartGame() {
        location.reload();
    }

    /**
     * Starts the different collisiion detections below with different intervals
     */
    run() {
        setInterval(() => {
            this.checkCollisionsCharacterWithChickens();
            this.checkCollisionsCharacterWithBigChickens();
            this.checkCollisionsCharacterWithEndboss()
            this.checkCollisionsCharacterWithBossWeapon();

            this.checkCollisionsCharacterWithBottles();
            this.checkCollisionsCharacterWithCoins();
            this.checkCollisionsBottleWithChickens();
            this.checkCollisionsBottleWithBigChickens();
            this.checkCollisionsBottleWithEndboss();

            this.checkForStartingBossfight();
            this.checkThrowObjects();
        }, 100);

        setInterval(() => {
            this.checkBossWeapon();
        }, 1200);
    }

    /**
     * Checks if the key enter is pushed, if yes, throws bottle and plays the bottle throw sound.
     */
    checkThrowObjects(index) {
        this.level.endboss.forEach(endboss => {
            if (this.keyboard.ENTER && this.collectedBottles.length > 0 && this.character.timePassedAfterThrow() && endboss.bottleThrow && !endboss.bossDead) {
                this.character.lastThrow = new Date().getTime();
                let bottle = new ThrowableObject(this.character.x + 20, this.character.y + 100)
                this.bottleThrowSound.play();
                this.throwedBottles.push(bottle);
                this.collectedBottles.splice(index, 1)
            }
        });
    }

    /**
     * Checks if the endboss is starting to attacking, if yes, it starts the boss weapon
     */
    checkBossWeapon() {
        this.level.endboss.forEach(endboss => {
            if (endboss.startAttacking && !endboss.bossDead) {
                let bullet = new BossWeapon(this.endboss.x + 50, this.endboss.y + 290);
                this.bossBullets.push(bullet);
            }
        });
    }

    /**
     * Checks if the character is colliding a chicken 
     */
    checkCollisionsCharacterWithChickens() {
        this.level.chickens.forEach((chicken) => {
            if (this.character.isColliding(chicken) && !chicken.bottleHitsChicken && !this.character.isAboveGround()) {
                this.character.hit(3);
                this.healthBar.setPercentageHealth(this.character.energy);
            } else if (this.character.jumpsOnTop(chicken)) {
                if (!chicken.bottleHitsChicken) {
                    this.chickenDead.play();
                }
                chicken.bottleHitsChicken = true;
                setTimeout(() => {
                    chicken.y = 500;
                }, 3000);
            }
        });
    }

    /**
     * Checks if the character is colliding a big chicken 
     */
    checkCollisionsCharacterWithBigChickens() {
        this.level.bigChickens.forEach((bigChicken) => {
            if (this.character.isColliding(bigChicken) && !bigChicken.bigChickenDead) {
                this.character.hit(3);
                this.healthBar.setPercentageHealth(this.character.energy);
            }
        });
    }

    /**
     * Checks if the character is colliding a boss weapon/bullet
     */
    checkCollisionsCharacterWithBossWeapon() {
        this.bossBullets.forEach(weapon => {
            if (this.character.isColliding(weapon) && !weapon.characterHitsWeapon && !this.character.isAboveGround()) {
                this.character.hit(2);
                this.healthBar.setPercentageHealth(this.character.energy);
            } else if (this.character.jumpsOnTop(weapon)) {
                weapon.characterHitsWeapon = true;
                this.chickenDead.play();
                setTimeout(() => {
                    weapon.y = 500;
                }, 3000);
            }
        })
    }

    /**
     * Checks if the character is colliding the endboss 
     */
    checkCollisionsCharacterWithEndboss() {
        this.level.endboss.forEach(endboss => {
            if (this.character.isColliding(endboss)) {
                this.character.hit(10);
                this.healthBar.setPercentageHealth(this.character.energy);
            }
        })
    }

    /**
     * Checks if a bottle is colliding a chicken 
     */
    checkCollisionsBottleWithChickens() {
        this.level.chickens.forEach(chicken => {
            this.throwedBottles.forEach(bottle => {
                if (bottle.isColliding(chicken) && !chicken.bottleHitsChicken) {
                    this.bottleSplash.play();
                    this.chickenDead.play();
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

    /**
     * Checks if a bottle is colliding a  big chicken 
     */
    checkCollisionsBottleWithBigChickens() {
        this.level.bigChickens.forEach(bigChicken => {
            this.throwedBottles.forEach(bottle => {
                if (bottle.isColliding(bigChicken)) {
                    bigChicken.hit(6);
                    this.bottleSplash.play();
                    this.chickenDead.play();
                    bottle.bottleHitsEnemy = true;
                    bigChicken.bottleHitsBigChicken = true;
                    this.removeSplashedBottle()
                } else if (bigChicken.isDead()) {
                    bigChicken.bigChickenDead = true;
                }
            });
        });
    }

    /**
     * Checks if a bottle is colliding the endboss
     */
    checkCollisionsBottleWithEndboss() {
        this.level.endboss.forEach(endboss => {
            this.throwedBottles.forEach(bottle => {
                if (bottle.isColliding(endboss)) {
                    this.bottleSplash.play();
                    bottle.bottleHitsEnemy = true;
                    endboss.bossHitted = true;
                    this.removeSplashedBottle()
                    this.endboss.hit(1);
                    this.bossBar.setPercentageHealth(this.endboss.energy);
                } else if (this.endboss.energy == 0) {
                    endboss.bossDead = true;
                    this.removeSplashedBottle();
                }
            });
        });
    }

    checkForStartingBossfight() {
        this.level.endboss.forEach(endboss => {
            if (this.character.x > 9380) {
                setTimeout(() => {
                    endboss.startAttacking = true;
                }, 9300);
            }
        });
    }

    /**
     * Checks if the character is colliding a collectable bottle
     */
    checkCollisionsCharacterWithBottles() {
        this.level.collectableBottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.bottleCollected.play();
                this.level.collectableBottles.splice(index, 1);
                this.collectedBottles.push(this.collectedBottle);
            }
        });
    }

    /**
     * Checks if the character is colliding a collectable coin
     */
    checkCollisionsCharacterWithCoins() {
        this.level.collectableCoins.forEach((coin, index) => {
            if (this.character.isColliding(coin) && this.coinBar.coins.length < 5) {
                this.level.collectableCoins.splice(index, 1);
                this.updateCoinbar();
                this.coinCollected.play();
            } else if (this.coinBar.coins.length >= 5 && this.character.energy < 100) {
                this.addHealthtoCharacter();
                this.resetCoinbar();
            } else if (this.coinBar.coins.length >= 5 && this.character.energy >= 100) {
                this.addBottles();
                this.resetCoinbar();
            }
        });
    }

    /**
     * Updates the coinbar depends to the collected coins
     */
    updateCoinbar() {
        this.level.collectableCoins.splice(1, 0);
        this.coinBar.percentage += 20;
        this.coinBar.setPercentageCoin(this.coinBar.percentage);
        this.coinBar.coins.push(this.collectedCoin);
    }

    /**
     * Added health to the character if some chosen event is happen
     */
    addHealthtoCharacter() {
        this.character.energy = 100;
        this.healthBar.setPercentageHealth(this.character.energy);
    }

    /**
     * Added 2 bottles to the bottle counter if some chosen event is happen 
     */
    addBottles() {
        this.collectedBottles.push(this.collectedBottle);
        this.collectedBottles.push(this.collectedBottle);
    }

    /**
     * Resets the coinbar if its bigger than 5 coins
     */
    resetCoinbar() {
        this.coinBar.percentage -= 100;
        this.coinBar.setPercentageCoin(this.coinBar.percentage);
        this.coinBar.coins.splice(0);
    }

    /**
     * Removes the bottle if its colliding an object  
     */
    removeSplashedBottle() {
        setTimeout(() => {
            this.throwedBottles.splice(1, 0);
        }, 100);
    }

    /**
     * Draws the different objects to the canvas 
     */
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

        this.level.endboss.forEach(endboss => {
            if (endboss.startAttacking) {
                this.addToMap(this.bossBar);
            }
        });
        // Space for fixed objects
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.collectableBottles);
        this.addObjectsToMap(this.level.collectableCoins);
        this.addObjectsToMap(this.level.chickens);
        this.addObjectsToMap(this.level.bigChickens);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwedBottles);
        this.addObjectsToMap(this.bossBullets);

        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder aufgerufen 
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    /**
     * Draws the bottle cunter to the canvas 
     */
    drawBottleCounter() {
        this.ctx.font = '20px serif';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.collectedBottles.length, 44.5, 158);
    }

    /**
     * Is used to set the objects in the draw function
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        })
    }

    /**
     * Is used to set fixed camera objects in the draw function
     */
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

    /**
     * Flips the image in 180 degrees
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Flips the image back in 180 degrees
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}