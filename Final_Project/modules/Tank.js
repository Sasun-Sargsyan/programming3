var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Tank extends LiveForm {
    constructor(x, y) {
        super(x,y)
        this.life = 125;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    } 
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;            
            let tank = new Tank(x, y);
            tankArr.push(tank);
            this.life = 0;
        }
    }
    eat() {

        let emptyCells = this.chooseCell(4);
        let newCell = random(emptyCells);
        if (newCell) {

            this.life++;
            let x = newCell[0];
            let y = newCell[1];
            
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            for (let i in huntArr) {
                if (huntArr[i].x == x && huntArr[i].y == y) {
                    huntArr.splice(i, 1)
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
        let emptyCells2 = this.chooseCell(1);
        let newCell = random(emptyCells.concat(emptyCells2));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];           
            matrix[y][x] = 4;
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

        for (let i in tankArr) {
            if (tankArr[i].x == this.x && tankArr[i].y == this.y) {
                tankArr.splice(i, 1)
            }
        }
    }
}