
var squareNum  = 6;

var colors = generateRandomColors(squareNum);
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	squareNum = 3;
	colors = generateRandomColors(squareNum);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";

		}
		}
});



hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	squareNum = 6;
	colors = generateRandomColors(squareNum);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	for(var i = 0; i < squares.length; i++){

			squares[i].style.backgroundColor = colors[i];

			squares[i].style.display = "block";

		
}});


colorDisplay.textContent = colorPicked;

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(squareNum);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	messageDisplay.textContent = null
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	};
	h1.style.backgroundColor ="steelblue"
});

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === colorPicked){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again";
			h1.style.backgroundColor = clickedColor;
		}	
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});

	}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].stylse.backgroundColor = color;
			}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(number){
	var arr = []
	for(var i = 0; i < number; i++){
		arr.push(randomColor())
	}
	return arr;
}

	function randomColor(){
		var r = Math.floor(Math.random() * 256)
		var g = Math.floor(Math.random() * 256)
		var b = Math.floor(Math.random() * 256)
		"rgb(r, g, b)"
		return "rgb(" + r + ", " + g + ", " + b +")"
	}

