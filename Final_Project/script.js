function setup() {

    var socket = io();
    var side = 30;
    var matrix = [];
    
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let gishCountElement = document.getElementById('gishCount')
    let gishLiveCountElement = document.getElementById('gishLiveCount');
    let huntCountElement = document.getElementById('huntCount');
    let huntLiveCountElement = document.getElementById('huntLiveCount');
    let terminatorCountElement = document.getElementById('termCount');
    let tankCountElement = document.getElementById('tankCount');

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

        gishCountElement.innerText = data.gishCounter;
        gishLiveCountElement.innerText = data.gishLiveCounter;

        huntCountElement.innerText = data.huntCounter;
        huntLiveCountElement.innerText = data.huntLiveCounter;

        terminatorCountElement.innerText = data.termCounter;

        tankCountElement.innerText = data.tankCounter;
        
        createCanvas(matrix[0].length * side, matrix.length * side)
        
        background('#acacac');
        
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "Ամառ"){
                        fill("green");
                    }else if (data.weather == "Աշուն"){
                        fill("orange");
                    }
                    else if (data.weather == "Ձմեռ"){
                        fill("white");
                    }
                    else if (data.weather == "Գարուն"){
                        fill("pink");
                    }
                    
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('violet');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('black');
                    rect(j * side, i * side, side, side);
                }
              else if (matrix[i][j] == 6) {
                fill('blue');
                rect(j * side, i * side, side, side);
            }
            }
        }
    }   
}