const level1 = new Level(

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
        new Endboss(),
    ],


    [
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud(),
        new Cloud()
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
        new CollectableBottles(500),
        new CollectableBottles(850),
        new CollectableBottles(1100),
        new CollectableBottles(1500),
        new CollectableBottles(1880),
        new CollectableBottles(2200),
        new CollectableBottles(2800),
        new CollectableBottles(2950),
        new CollectableBottles(3500),
        new CollectableBottles(3800),
        new CollectableBottles(4500),
        new CollectableBottles(5000),
        new CollectableBottles(5600),
        new CollectableBottles(5900),
        new CollectableBottles(6500),
        new CollectableBottles(7000),
        new CollectableBottles(8000),
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