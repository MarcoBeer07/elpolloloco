let canvas;
let world;
let keyboard = new Keyboard();
let introSound = new Audio('./audio/intro_music.mp3');
let gameSound = new Audio('./audio/game_music.mp3');

introSound.loop = true;
introSound.volume = 0.2;
gameSound.loop = true;
gameSound.volume = 0.2;


function startScreen() {
    introSound.pause()
}

function startGame() {
    document.getElementById('mute-button-game').blur();
    canvas = document.getElementById('canvas');
    document.getElementById('menu-buttons').classList.remove('d-none');
    document.getElementById('startscreen').classList.add('d-none');
    document.getElementById('mute-button-startscreen').classList.add('d-none');
    document.getElementById('start-button').classList.add('d-none');
    introSound.pause();
    gameSound.play();
    startLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    mobileButtonPressEvents();
}

function muteMusicStartScreen() {
    if (introSound.paused == false) {
        document.getElementById('mute-button-startscreen').innerHTML = `Music on`
        introSound.pause();
    } else if (introSound.paused == true) {
        document.getElementById('mute-button-startscreen').innerHTML = `Music off`
        introSound.play();
    }
}

function muteMusicGame() {
    if (gameSound.paused == false) {
        document.getElementById('mute-button-game').innerHTML = `Music on`
        gameSound.pause();
    } else if (gameSound.paused == true) {
        document.getElementById('mute-button-game').innerHTML = `Music off`
        gameSound.play();
    }
}



function mobileButtonPressEvents() {
    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });


    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });

    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.ENTER = true;
    });

    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.ENTER = false;
    });

}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 83) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 87) {
        keyboard.UP = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 81 || e.keyCode == 13) {
        keyboard.ENTER = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 87) {
        keyboard.UP = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 81 || e.keyCode == 13) {
        keyboard.ENTER = false;
    }
});

//13 Enter