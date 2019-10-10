let matrix = [];
let side = 20;
let grassArr = [];
let GrassEaterArr = [];
let GishatichArr=[];
let TankArr=[];
let HunterArr =[];

function setup() {
    matrixGenerator(50, 500,50,30,15,12);
    frameRate(4);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                grassArr.push(grass);
            }
            if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y);
                GrassEaterArr.push(grassEater);
            }
            if (matrix[y][x] == 3) {
                let gishatich = new Gishatich(x,y);
                GishatichArr.push(gishatich);
            }
            if (matrix[y][x] == 4) {
                let tank = new Tank(x,y);
                TankArr.push(tank);
            }
            if (matrix[y][x] == 5) {
                let hunter = new Hunter(x,y);
                HunterArr.push(hunter);
            }
        }
    }
    function matrixGenerator(matrixSize, grass, grassEater,gishatich,tank,hunter) {
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = [];
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grass; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 1;
        }
        for (let i = 0; i < grassEater; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 2;
        }
        for (let i = 0; i < gishatich; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 3;
        }
        for (let i = 0; i < tank; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 4;
        }
        for (let i = 0; i < hunter; i++) {
            let customX = Math.floor(random(0, matrixSize));
            let customY = Math.floor(random(0, matrixSize));
            matrix[customY][customX] = 5;
        }
    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if(matrix[y][x] ==4 ){
                fill("#993300")
            }
            else if(matrix[y][x] ==5 ){
                fill("#d633ff")
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in GrassEaterArr) {
        GrassEaterArr[i].utel();
    }
    for(var i in GishatichArr){
        GishatichArr[i].eat()
    }
    for(var i in TankArr){
        TankArr[i].spanel()
    }
    for(var i in HunterArr){
        HunterArr[i].kill()
    }
}
