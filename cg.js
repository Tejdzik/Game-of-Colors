var squareNum  = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorPicked;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");


startPage();

function startPage(){
	setupModeBtns();
	setupSquares();
	reset();
}

function setupModeBtns(){
	for(var i = 0; i < modeBtns.length; i++){
	 modeBtns[i].addEventListener("click", function(){
	 	for(var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].classList.remove("selected");
	}
		this.classList.add("selected");

		if(this.textContent === "Easy"){
			squareNum = 3;			
		} else if(this.textContent === "Medium"){
			squareNum = 6;
		} else {
			squareNum = 9;
		}
		reset();
	});
}
}

function setupSquares(){
		for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === colorPicked){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again";
			h1.style.backgroundColor = clickedColor;
			changeColors(clickedColor);
		}	
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});

	}
}

function reset(){
	colors = generateRandomColors(squareNum);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	messageDisplay.textContent = null
	resetButton.textContent = "New Colors"
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
 			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	};
	h1.style.backgroundColor ="steelblue"
}



resetButton.addEventListener("click", function(){
 	reset();
});



function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
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
		return "rgb(" + r + ", " + g + ", " + b +")"
	}

