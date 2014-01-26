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
	if (currentplayer.playerNumber == player1){
		
		currentplayer = player2;
	} 	
	
	else if (currentplayer.playerNumber == player2){
	
		currentplayer = player1;
	}

	alert("what?");
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