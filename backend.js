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
// var x = Math.floor(event.clienty/32);
// var y = Math.floor(event.clientx/32);

// alert("X coords: " + x + ", Y coords: " + y);
}