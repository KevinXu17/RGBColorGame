var colors = ["rgb(255, 0, 0)",
              "rgb(255, 255, 0)",
              "rgb(0, 255, 0)",
              "rgb(0, 0, 255)",
              "rgb(0, 255, 255)",
              "rgb(255, 0, 255)"]
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var pickColor = randonColor();
colorDisplay.textContent = pickColor;
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
  var clickColor = this.style.backgroundColor;
  if (clickColor === pickColor) {
    messageDisplay.textContent = "Correct!";
    changeAllColor(pickColor);
  } else {
    messageDisplay.textContent = "Try again!";
    this.style.backgroundColor = "#232323";
  }
  });
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
