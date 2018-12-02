export default class Plateau {
    constructor(maxX, maxY) {
        this.minX = 0;
        this.minY = 0;
        this.maxX = 5;
        this.maxY = 5;
    }

    inBounds(x, y) {
        return this.inXBounds(x) && this.inYBounds(y);
    }

    inXBounds(x) {
        return x >= this.minX && x <= this.maxX;
    }

    inYBounds(y) {
        return y >= this.minY && y <= this.maxY;
    }
}



