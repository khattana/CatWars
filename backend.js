//global variables and functions

var mapLength = 1024;
var incomeMapData = new Array();
var x = 0;
var y = 0;


var mapCol;
var mapRow;
var map;

var player1;
var player2;
var currentplayer;
//var player1Score = 1000; 
//var player2Score = 1000;
var currentplayerscore = 0;

var addBuilding = function( _x, _y, player )
{
	x = Math.floor(_y/32);
	y = Math.floor(_x/32);
	var old = mapData[x][y];
	if (old != 2 && old != 3 + player)
		mapData[x][y] = 6;
	else
		mapData[x][y] = 3 + player; 
	map.loadData(mapData);
};

function player ( playerNumber, playerScore){
	if (!playerScore) playerScore = 1000;
	this.playerNumber = playerNumber;
	this.playerScore = playerScore;
	this.income = 99;
	this.isCurrentPlayer = false;
}

var tileNumber ;
var Score, Player1;
var mapData = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 5, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 4, 4, 3, 3, 4, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 4, 3, 3, 3, 3, 3, 4, 3, 4, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 4, 3, 4, 3, 4, 3, 3, 3, 2, 1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 4, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 4, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 2, 3, 4, 4, 3, 3, 3, 3, 3, 4, 3, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 2, 3, 4, 3, 3, 3, 3, 3, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 4, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 4, 3, 3, 3, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 3, 3, 3, 4, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 2, 2, 2, 2, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 3];
//returns a pair of x,y coordinates
var getTile = function(x,y) {

return { x: Math.floor(y/32), y: Math.floor(x/32)};
}	

var getTileNum = function(x,y) {

return mapData[Math.floor(y/32)][Math.floor(x/32)];
}	
//-----------------------------------


function CalculateCost(buy){
    var buyVal = parseFloat($("#buyId").val());
    var tempX = Math.floor(Math.floor(mapCol)/32);
    var tempY = Math.floor(mapRow);
    var i = (tempX + tempY);
    i = Math.floor(i);

    $("#totalIncome").val(incomeMapData[i].totalIncome);
    $("#costP1").val(incomeMapData[i].p1Invest);
    $("#costP2").val(incomeMapData[i].p2Invest);
    var totalPerc = (incomeMapData[i].p1Invest + incomeMapData[i].p2Invest) | 0;
    var p1Perc = totalPerc ? incomeMapData[i].p1Invest / totalPerc : 0;
    var p2Perc = totalPerc ? incomeMapData[i].p2Invest / totalPerc : 0;
    //document.getElementById('incomeP1').value= p1Perc;
    $("#incomeP1").val(Math.floor(p1Perc*100)+"%");
    $("#incomeP2").val(Math.floor(p2Perc*100)+"%");
    $("#totalIncome").val(incomeMapData[i].totalIncome);
    $("#buyId").val("");
    if (buy)
    {
        alert("You have spent: $"+buyVal);
        bullshit(buyVal,i);
    }
	return false;
}

function bullshit(buy,i){
    // mapCol x coordinate , mapRow y coordinate
    // Calculate index value for the incomeMapData
    // top left corner is 0, 0


    var isP1;
	if (player1.isCurrentPlayer){
		isP1 = 1;
	} else {isP1 = 0 ;} 	
	
    if(isP1 == 1){
        incomeMapData[i].p1Invest += buy;
        addBuilding(mapCol, mapRow, 1);
    }
    else {
        incomeMapData[i].p2Invest += buy;
        addBuilding(mapCol, mapRow, 2);
    }
	$("#costP1").val(incomeMapData[i].p1Invest);
	$("#costP2").val(incomeMapData[i].p2Invest);
    var totalPerc = incomeMapData[i].p1Invest + incomeMapData[i].p2Invest;
    var p1Perc = incomeMapData[i].p1Invest / totalPerc;
    var p2Perc = incomeMapData[i].p2Invest / totalPerc;
    //document.getElementById('incomeP1').value= p1Perc;
    $("#incomeP1").val(Math.floor(p1Perc*100)+"%");
    $("#incomeP2").val(Math.floor(p2Perc*100)+"%");
    $("#totalIncome").val(incomeMapData[i].totalIncome);
}

function DoneFunc()
{
	if (player1.isCurrentPlayer){
		player1.isCurrentPlayer = false;
		player2.isCurrentPlayer = true;
		currentplayer = player2;
		Player1.text = "Player 2";
	} 	
	
	else {
		player2.isCurrentPlayer = false;
		player1.isCurrentPlayer = true;
		currentplayer = player1;
		Player1.text = "Player 1";
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
/*var x=;
var y=event.clientY;
var tempX = Math.floor(Math.floor(y)/32);
    var tempY = Math.floor(x);
    var i = (tempX + tempY);
    i = Math.floor(i);﻿
console.log("I value: " + i);
alert(incomeMapData[i].totalIncome);
*/
// var x = Math.floor(event.clienty/32);
// var y = Math.floor(event.clientx/32);

// alert("X coords: " + x + ", Y coords: " + y);
}