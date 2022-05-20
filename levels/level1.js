const level1 = new Level(

    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken()
    ], [
        new Endboss()
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
        new CollectableObject(),
        new CollectableObject(),
        new CollectableObject(),
        new CollectableObject(),
        new CollectableObject(),
        new CollectableObject(),
        new CollectableObject(),
        new CollectableObject(),
    ],

    [
        new CollectableCoins(),
        new CollectableCoins(),
        new CollectableCoins(),
        new CollectableCoins(),
        new CollectableCoins(),
        new CollectableCoins(),
        new CollectableCoins(),
        new CollectableCoins(),
        new CollectableCoins(),
        new CollectableCoins(),
        new CollectableCoins(),
        new CollectableCoins(),

    ],


);