class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x;
    y;
    height;
    width;


    loadImage(path) {
        this.img = new Image(); //this.img = document.getElementById('image')
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr - ['img/image1.png, 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })

    }

    setPercentageHealth(percentage) {
        this.percentage = percentage; // => 0 ... 5 
        let path = this.IMAGES[this.resolveImageIndexHealth()];
        this.img = this.imageCache[path];

    }

    resolveImageIndexHealth() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss || this instanceof ThrowableObject || this instanceof CollectableBottles || this instanceof CollectableCoins) {
            ctx.beginPath();
            ctx.lineWidth = "0";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


}