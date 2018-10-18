var numberOfSquares = 6;
var colors = makeRandomArray(numberOfSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

var pickColor = randonColor();
easyButton.addEventListener("click", function() {
  numberOfSquares = 3;
  messageDisplay.textContent = "";
  this.classList.add("selected");
  hardButton.classList.remove("selected");
  h1.style.backgroundColor = "steelblue";
  colors = makeRandomArray(numberOfSquares);
  pickColor = randonColor();
  colorDisplay.textContent = pickColor;
  for (var i = 0; i < squares.length; i ++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardButton.addEventListener("click", function() {
  numberOfSquares = 6;
  messageDisplay.textContent = "";
  this.classList.add("selected");
  easyButton.classList.remove("selected");
  h1.style.backgroundColor = "steelblue";
  colors = makeRandomArray(numberOfSquares);
  pickColor = randonColor();
  colorDisplay.textContent = pickColor;
  for (var i = 0; i < squares.length; i ++) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
})
colorDisplay.textContent = pickColor;
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
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
resetButton.addEventListener("click", function() {
  resetButton.textContent = "NEW COLOR";
  // generate new COLORS
  colors = makeRandomArray(numberOfSquares);
  pickColor = randonColor();
  messageDisplay.textContent = "";
  h1.style.background = "steelblue";

  //change all colors
  colorDisplay.textContent = pickColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});
// helper
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
