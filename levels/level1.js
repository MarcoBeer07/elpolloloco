let level1;

function startLevel() {
    level1 = new Level(

        [
            new Chicken(1000),
            new Chicken(2200),
            new Chicken(2550),
            new Chicken(3000),
            new Chicken(4200),
            new Chicken(5000),
            new Chicken(6000),
            new Chicken(6000),
            new Chicken(6800),
            new Chicken(7000),
            new Chicken(7800),
            new Chicken(8500),
        ],

        [
            new BigChicken(2000),
            new BigChicken(4000),
            new BigChicken(7000),
        ],

        [
            new Endboss(),
        ],

        [
            new Cloud(500),
            new Cloud(1200),
            new Cloud(1800),
            new Cloud(2400),
            new Cloud(4000),
            new Cloud(4600),
            new Cloud(5600),
            new Cloud(6800),
            new Cloud(7200),
            new Cloud(7900),
            new Cloud(8500),
            new Cloud(9600),
            new Cloud(10200),
            new Cloud(11000),
            new Cloud(11600),
        ],

        [
            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -720),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -720),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -720),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -720),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 720),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 720),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 720),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 2),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 720 * 2),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 720 * 2),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 720 * 2),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 3),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 720 * 3),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 720 * 3),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 720 * 3),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 4),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 720 * 4),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 720 * 4),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 720 * 4),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 5),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 720 * 5),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 720 * 5),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 720 * 5),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 6),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 720 * 6),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 720 * 6),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 720 * 6),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 7),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 720 * 7),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 720 * 7),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 720 * 7),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 8),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 720 * 8),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 720 * 8),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 720 * 8),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 9),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 720 * 9),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 720 * 9),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 720 * 9),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 10),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 720 * 10),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 720 * 10),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 720 * 10),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 11),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 720 * 11),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 720 * 11),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 720 * 11),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 12),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 720 * 12),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 720 * 12),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 720 * 12),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 13),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 720 * 13),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 720 * 13),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 720 * 13),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 14),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 720 * 14),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 720 * 14),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 720 * 14),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 15),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 720 * 15),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 720 * 15),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 720 * 15),

            new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 720 * 16),
            new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 720 * 16),
            new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 720 * 16),
            new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 720 * 16),
        ],

        [
            new CollectableBottles(500, 0),
            new CollectableBottles(700, 0),
            new CollectableBottles(850, 1),
            new CollectableBottles(1100, 0),
            new CollectableBottles(1350, 1),
            new CollectableBottles(1500, 1),
            new CollectableBottles(1880, 0),
            new CollectableBottles(2200, 1),
            new CollectableBottles(2800, 0),
            new CollectableBottles(2950, 1),
            new CollectableBottles(3500, 1),
            new CollectableBottles(3800, 0),
            new CollectableBottles(4500, 1),
            new CollectableBottles(5000, 0),
            new CollectableBottles(5600, 1),
            new CollectableBottles(5900, 1),
            new CollectableBottles(6500, 0),
            new CollectableBottles(7000, 1),
            new CollectableBottles(8000, 0),
            new CollectableBottles(8100, 1),
            new CollectableBottles(8200, 0),
            new CollectableBottles(8300, 1),
            new CollectableBottles(8400, 0),
            new CollectableBottles(8500, 1),
            new CollectableBottles(8600, 1),
            new CollectableBottles(8700, 1),
            new CollectableBottles(8800, 0),
            new CollectableBottles(8900, 1),
            new CollectableBottles(8900, 0),
        ],

        [
            new CollectableCoins(1300, 280),
            new CollectableCoins(2300, 200),
            new CollectableCoins(3000, 150),
            new CollectableCoins(4200, 290),
            new CollectableCoins(5000, 190),
            new CollectableCoins(6200, 220),
            new CollectableCoins(7100, 300),
            new CollectableCoins(8000, 200),
        ],
    );
}