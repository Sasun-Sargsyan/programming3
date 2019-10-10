class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.life = 25;
        this.directions = []
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            let gishatich = new Gishatich(x, y);
            GishatichArr.push(gishatich);
            this.life = 0;
        }
    }
    eat() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);
        if (newCell) {
            this.life++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            for (let i in GrassEaterArr) {
                if (GrassEaterArr[i].x == x && GrassEaterArr[i].y == y) {
                    GrassEaterArr.splice(i, 1)
                }
            }
            this.y = y;
            this.x = x;
            if (this.life >= 4) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.life--;
        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCells1));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.life < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i in GishatichArr) {
            if (GishatichArr[i].x == this.x && GishatichArr[i].y == this.y) {
                GishatichArr.splice(i, 1)
            }
        }
    }
}