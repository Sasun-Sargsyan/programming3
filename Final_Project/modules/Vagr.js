var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Vagr extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 30;
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
    move() {
        this.life--;
        let emptyCells1 = this.chooseCell(0);
        let emptyCells2 = this.chooseCell(1);
        let emptyCells = emptyCells1.concat(emptyCells2)
        let newCell = random(emptyCells);
        
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 7;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.life < 0) {
            this.die();
        }
    }
    eat() {
        let emptyCells = this.chooseCell(2);
        let emptyCells1 = this.chooseCell(3);
        let newCell = random(emptyCells.concat(emptyCells1));

        if (newCell) {

            this.life++;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 7;
            matrix[this.y][this.x] = 0;

            for (let i in eatArr) {
                if (eatArr[i].x == x && eatArr[i].y == y) {
                    eatArr.splice(i, 1)
                }
            }
            for (let i in gishArr) {
                if (gishArr[i].x == x && gishArr[i].y == y) {
                    gishArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;

            if (this.life >= 40) {
                this.mul();
            }
        }
        else {
            this.move()
        }
    }
    mul() {
        
        let emptyCells = this.chooseCell(0);
        let emptyCells1 = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCells1));
        if (newCell) {
            vagrHashiv++
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 7;
            let vagr = new Vagr(x, y);
            vagrArr.push(vagr);
            this.life = 10;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i in vagrArr) {
            if (vagrArr[i].x == this.x && vagrArr[i].y == this.y) {
                vagrArr.splice(i, 1)
            }
        }
    }
}