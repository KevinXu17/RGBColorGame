var numberOfSquares = 6;
var colors = [];
var pickColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init() {
  reset();
  setupMode();
  setupSquares();
  setupReset();
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
    var clickColor = this.style.backgroundColor;
    if (clickColor === pickColor) {
      messageDisplay.textContent = "Correct!";
      changeAllColor(pickColor);
      h1.style.background = pickColor;
      resetButton.textContent = "PLAY AGAIN?"
    } else {
      messageDisplay.textContent = "Try again!";
      this.style.backgroundColor = "#232323";
    }
    });
  }
}
function setupMode() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      for (var j = 0; j < modeButtons.length; j++) {
        modeButtons[j].classList.remove("selected");
      }
      this.classList.add("selected");
      this.textContent === "EASY" ? numberOfSquares = 3 : numberOfSquares = 6;
      reset();
    });
  }
}
function setupReset() {
  resetButton.addEventListener("click", function() {
    reset();
  });
}
// helper
function reset() {
  resetButton.textContent = "NEW COLOR";
  colors = makeRandomArray(numberOfSquares);
  pickColor = randonColor();
  messageDisplay.textContent = "";
  h1.style.background = "steelblue";
  //change all colors
  colorDisplay.textContent = pickColor;
  for (var i = 0; i < squares.length; i++) {
    if (i < numberOfSquares) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
      squares[i].style.backgroundColor = "steelblue";
    }
  }
}
function changeAllColor(color) {
  for (var j = 0; j < squares.length; j++) {
    squares[j].style.backgroundColor = color;
  }
}
function randonColor() {
  var random =  Math.floor(Math.random() * colors.length);
  return colors[random];
}
function makeRandomArray(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {

    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
