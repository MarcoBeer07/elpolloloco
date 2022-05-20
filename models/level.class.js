class Level {
    chickens;
    endboss;
    clouds;
    backgroundObjects;
    collectableObject;
    collectableCoins;

    level_end_x = 11000;


    constructor(chickens, endboss, clouds, backgroundObjects, collectableObject, collectableCoins) {
        this.chickens = chickens;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectableObject = collectableObject;
        this.collectableCoins = collectableCoins;
    }
}