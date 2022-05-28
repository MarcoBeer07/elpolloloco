class Level {
    chickens;
    bigChickens;
    endboss;
    clouds;
    backgroundObjects;
    collectableBottles;
    collectableCoins;

    level_end_x = 11000;

    constructor(chickens, bigChickens, endboss, clouds, backgroundObjects, collectableBottles, collectableCoins) {
        this.chickens = chickens;
        this.bigChickens = bigChickens;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectableBottles = collectableBottles;
        this.collectableCoins = collectableCoins;
    }
}