//global variables and functions

var player1;
var player2;
var currentplayer;
//var player1Score = 1000; 
//var player2Score = 1000;
var currentplayerscore = 0;

function player ( playerNumber, playerScore = 1000){
	this.playerNumber = playerNumber;
	this.playerScore = playerScore;
	this.income = 99;
	this.isCurrentPlayer = false;
}

var tileNumber ;
var Score;
var mapData = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 5, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 4, 4, 3, 3, 4, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 4, 3, 3, 3, 3, 3, 4, 3, 4, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 4, 3, 4, 3, 4, 3, 3, 3, 2, 1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 4, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 4, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 2, 3, 4, 4, 3, 3, 3, 3, 3, 4, 3, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 2, 3, 4, 3, 3, 3, 3, 3, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 4, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 4, 3, 3, 3, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 3, 3, 3, 4, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 2, 2, 2, 2, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 3];
//returns a pair of x,y coordinates
var getTile = function(x,y) {

return { x: Math.floor(y/32), y: Math.floor(x/32)};
}	

var getTileNum = function(x,y) {

return mapData[Math.floor(y/32)][Math.floor(x/32)];
}	
//-----------------------------------


function CalculateCost(){

	var costObj = document.getElementById('CostCalculator');
	var buy = costObj.cost.value;
	//console.log(buy);
	alert("buy"+buy);
	return false;
}
function bullshit()
{

	document.getElementById('hey').value="yoyo";

}

function DoneFunc()
{
	if (player1.isCurrentPlayer){
		player1.isCurrentPlayer = false;
		player2.isCurrentPlayer = true;
		currentplayer = player2;
	} 	
	
	else {
		player2.isCurrentPlayer = false;
		player1.isCurrentPlayer = true;
		currentplayer = player1;
	}
	player1.playerScore += player1.income;
	player2.playerScore += player2.income;
	Score.text = "SCORE: " + currentplayer.playerScore;
	//alert("what?");
}

// function onMouseoverTest()
// {
	// onmouseover = "onMouseoverTest()"
  	// console.log("Is it working?");
// }

function show_coords(event)
{
var x=event.clientX;
var y=event.clientY;
var i = x + (y * 32);
alert(incomeMapData[i].totalIncome);

// var x = Math.floor(event.clienty/32);
// var y = Math.floor(event.clientx/32);

// alert("X coords: " + x + ", Y coords: " + y);
}