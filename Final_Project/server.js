var Grass = require("./modules/Grass.js");
var GrassEater = require("./modules/GrassEater.js");
var Gishatich = require("./modules/Gishatich.js");
var Hunter = require("./modules/Hunter.js");
var Terminator = require("./modules/Terminator.js");
var Tank = require("./modules/Tank.js");
let random = require('./modules/random');

grassArr = [];
eatArr = [];
gishArr = [];
huntArr = [];
termArr = [];
tankArr = [];
matrix = [];

grassHashiv = 0;
eatHashiv = 0;
gishHashiv = 0;
huntHashiv = 0;
termHashiv = 0;
tankHashiv = 0;

function matrixGenerator(matrixSize, grass, eat, gish, hunt, term, tank) {
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grass; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 1;
    }
    for (let i = 0; i < eat; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 2;
    }
    for (let i = 0; i < gish; i++) {
        let customX = Math.floor(random(matrixSize));
        let customY = Math.floor(random(matrixSize));
        matrix[customY][customX] = 3;
        for (let i = 0; i < hunt; i++) {
            let customX = Math.floor(random(matrixSize));
            let customY = Math.floor(random(matrixSize));
            matrix[customY][customX] = 4;
        }
        for (let i = 0; i < term; i++) {
            let customX = Math.floor(random(matrixSize));
            let customY = Math.floor(random(matrixSize));
            matrix[customY][customX] = 6;
        }
        for (let i = 0; i < tank; i++) {
            let customX = Math.floor(random(matrixSize));
            let customY = Math.floor(random(matrixSize));
            matrix[customY][customX] = 5;
        }
    }
}
    matrixGenerator(20, 25, 20, 15, 10, 5, 2);

    var express = require('express');
    var app = express();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);
    app.use(express.static("."));
    app.get('/', function (req, res) {
        res.redirect('index.html');
    });
    server.listen(3000);

    function creatingObjects() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 2) {
                    var grassEater = new GrassEater(x, y);
                    eatArr.push(grassEater);
                    eatHashiv++;
                } else if (matrix[y][x] == 1) {
                    var grass = new Grass(x, y);
                    grassArr.push(grass);
                    grassHashiv++;
                }
                else if (matrix[y][x] == 3) {
                    var gish = new Gishatich(x, y);
                    gishArr.push(hunt);
                    gishHashiv++
                }
                else if (matrix[y][x] == 4) {
                    var hunt = new Hunter(x, y);
                    huntArr.push(hunt);
                    huntHashiv++
                }
                else if (matrix[y][x] == 6) {
                    var term = new Terminator(x, y);
                    termArr.push(term);
                    termHashiv++
                }
                else if (matrix[y][x] == 5) {
                    var tank = new Tank(x, y);
                    tankArr.push(tank);
                    tankHashiv++
                }
            }
        }
    }

    creatingObjects();

    let exanak = 0;
    let weather = "Գարուն"
    setInterval(game, 1000)

    function game(){

        exanak++;
        if (exanak <= 10) {
            weather = "Ամառ"
        } else if (exanak <= 20) {
            weather = "Աշուն"
        } else if (exanak <= 30) {
            weather = "Ձմեռ"
        }
        else if (exanak <=40){
          weather = "Գարուն"
        }
        else if (exanak > 40) {
            exanak = 0
        }
    

        if (grassArr[0] !== undefined) {
            for (var i in grassArr) {
                grassArr[i].mul();
            }
        }
        if (eatArr[0] !== undefined) {
            for (var i in eatArr) {
                eatArr[i].eat();
            }
        }
        if (gishArr[0] !== undefined) {
            for (var i in gishArr) {
                gishArr[i].eat();
            }
        }
        if (huntArr[0] !== undefined) {
            for (var i in huntArr) {
                huntArr[i].eat();
            }
        }
        if (termArr[0] !== undefined) {
            for (var i in termArr) {
                termArr[i].eat();
            }
        }
        if (tankArr[0] !== undefined) {
            for (var i in tankArr) {
                tankArr[i].eat();
            }
        }
    
    let sendData = {
        matrix: matrix,
        grassCounter: grassHashiv,
        grassLiveCounter: grassArr.length,
        eatCounter: eatHashiv,
        gishCounter: gishHashiv,
        huntCounter: huntHashiv,
        termCounter: termHashiv,
        tankCounter: tankHashiv,
        weather: weather,
    }

    io.sockets.emit("data", sendData);
}

