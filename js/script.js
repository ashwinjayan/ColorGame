var colors = [];
var goal;
var numOfSquares = 6;

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

resetButton.addEventListener("click", function () {
    reset();
});

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add quick listener to squares
        squares[i].addEventListener("click", function () {
            //grab the color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare with goal
            if (clickedColor === goal) {
                h1.style.backgroundColor = goal;
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(goal);
            } else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function setupModeButtons() {
    for (var i = 0; i < modeBtns.length; i++) {
        modeBtns[i].addEventListener("click", function () {
            for (var j = 0; j < modeBtns.length; j++) {
                modeBtns[j].classList.remove("selected");
            }
            this.classList.add("selected");
            this.textContent === "Easy"
                ? (numOfSquares = 3)
                : (numOfSquares = 6);
            reset();
        });
    }
}

function reset() {
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(numOfSquares);
    goal = pickColor();
    colorDisplay.textContent = goal;
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";

    for (var i = 0; i < squares.length; i++) {
        //add intial colors to squares
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return arrary
    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}
