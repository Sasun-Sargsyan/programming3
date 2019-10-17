var LiveForm = require("./LiveForm.js");
var random = require("./random.js");

module.exports = class Hunter extends LiveForm {
    constructor(x, y) {
        super(x,y)
        this.life = 50;
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
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 
    mul() {
        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1)
        let newCell = random(emptyCells.concat(emptyCells1));

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            let hunter = new Hunter(x, y);
            HunterArr.push(hunter);
            this.life = 0;
        }
    }
    kill() {
        let emptyCells = this.chooseCell(2);
        let emptyCellss = this.chooseCell(3);
        let newCell = random(emptyCells.concat(emptyCellss));
        if (newCell) {

            this.life++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            for (let i in eatArr) {
                if (eatArr[i].x == x && eatArr[i].y == y) {
                    eatArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

            if (this.life >= 17) {
                this.mul();
            }
        }
        else {
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
            matrix[y][x] = 5;
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
        for (let i in HunterArr) {
            if (HunterArr[i].x == this.x && HunterArr[i].y == this.y) {
                HunterArr.splice(i, 1)
            }
        }
    }
}