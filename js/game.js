let canvas;
let world;
let keyboard = new Keyboard();
game_sound = new Audio('audio/game_music.mp3');
intro_sound = new Audio('audio/running.mp3');



function init() {
    document.getElementById('startscreen').classList.add('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    // this.game_sound.play();

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
    if (e.keyCode == 13) {
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
    if (e.keyCode == 13) {
        keyboard.ENTER = false;
    }
});