function setup() {

    var socket = io();
    var side = 10;
    var matrix = [];

    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    let gishCountElement = document.getElementById('gishCount')
    let gishLiveCountElement = document.getElementById('gishLiveCount');
    let huntCountElement = document.getElementById('huntCount');
    let huntLiveCountElement = document.getElementById('huntLiveCount');
    let terminatorCountElement = document.getElementById('termCount');
    let terminatorLiveCountElement = document.getElementById('termLiveCount');
    let tankCountElement = document.getElementById('tankCount');
    let tankLiveCountElement = document.getElementById('tankLiveCount');
    let vagrCountElement = document.getElementById('vagrCount');
    let vagrLiveCountElement = document.getElementById('vagrLiveCount');

    socket.on("data", drawCreatures);

    function drawCreatures(data) {



        // matrix=data.matrix,
        // grassCounter=data.grassHashiv,
        // grassLiveCounter=data.grassArr.length,
        // eatCounter=data.eatHashiv,
        // gishCounter=data.gishHashiv,
        // gishLiveCounter=data.gishArr.length,
        // huntCounter=data.huntHashiv,
        // termCounter=data.termHashiv,
        // tankCounter=data.tankHashiv,
        // weather=data.weather,


        matrix = data.matrix;
        weatherElement.innerText = data.weather;

        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;

        grassEaterCountElement.innerText = data.eatCounter;
        grassEaterLiveCountElement.innerText = data.eatLiveCounter;

        gishCountElement.innerText = data.gishCounter;
        gishLiveCountElement.innerText = data.gishLiveCounter;

        huntCountElement.innerText = data.huntCounter;
        huntLiveCountElement.innerText = data.huntLiveCounter;

        terminatorCountElement.innerText = data.termCounter;
        terminatorLiveCountElement.innerText = data.termLiveCounter;

        tankCountElement.innerText = data.tankCounter;
        tankLiveCountElement.innerText = data.tankLiveCounter;

        vagrCountElement.innerText = data.vagrCounter
        vagrLiveCountElement.innerText = data.vagrLiveCounter
        createCanvas(matrix[0].length * side, matrix.length * side)

        background('#acacac');

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if (data.weather == "Ամառ") {
                        fill("green");
                    } else if (data.weather == "Աշուն") {
                        fill("orange");
                    }
                    else if (data.weather == "Ձմեռ") {
                        fill("white");
                    }
                    else if (data.weather == "Գարուն") {
                        fill("pink");
                    }
                } else if (matrix[i][j] == 2) {
                    if (data.weather == ("Ամառ")) {
                        fill("yellow")
                    }
                    if (data.weather == "Գարուն") {
                        fill("#fffd7a")
                    }
                    if (data.weather == "Ձմեռ") {
                        fill("#fffd7a")
                    }
                    if (data.weather == "Աշուն") {
                        fill("#dedb02")
                    }
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                } else if (matrix[i][j] == 3) {
                    if (data.weather == "Ամառ") {
                        fill("#red")
                    }
                    if (data.weather == "Գարուն") {
                        fill("#red")
                    }
                    if (data.weather == "Աշուն") {
                        fill("#red")
                    }
                    if (data.weather == "Ձմեռ") {
                        fill("#ff6161")
                    }
                } else if (matrix[i][j] == 4) {
                    if (data.weather == "Ամառ") {
                        fill("violet")
                    }
                    if (data.weather == "Գարուն") {
                        fill("violet")
                    }
                    if (data.weather == "Ձմեռ") {
                        fill("#ffc4f9")
                    }
                    if (data.weather == "Աշուն") {
                        fill("#b0009e")
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    if (data.weather == "Ձմեռ") {
                        fill("#363636")
                    }
                    if (data.weather == "Ամառ") {
                        fill("black")
                    }
                    if (data.weather == "Գարուն") {
                        fill("black")
                    }
                    if (data.weather == "Աշուն") {
                        fill("#211919")
                    }
                }
                else if (matrix[i][j] == 6) {
                    if (data.weather == "Աշուն") {
                        fill("#050054")
                    }
                    if (data.weather == "Ամառ") {
                        fill("blue")
                    }
                    if (data.weather == "Գարուն") {
                        fill("blue")
                    }
                    if (data.weather == "Ձմեռ") {
                        fill("#bab6fa")
                    }
                }
                else if (matrix[i][j] == 7) {
                    if (data.weather == "Ամառ") {
                        fill("orange")
                    }
                    if (data.weather == "Գարուն") {
                        fill("orange")
                    }
                    if (data.weather == "Ձմեռ") {
                        fill("#fac252")
                    }
                    if (data.weather == "Աշուն") {
                        fill("#b37804")
                    }
                }
                rect(j * side, i * side, side, side);
            }
        }
    }
}