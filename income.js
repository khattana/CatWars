// ----Volkan Edit --
//Create a function will find who is the player
// Do it when reading the menu 

function eachTileData(totalIncome, p1Invest, p2Invest, tilex, tiley, tileNum) {
    this.totalIncome = totalIncome;
    this.p1Invest = p1Invest;
    this.p2Invest = p2Invest;
    this.tilex = tilex;
	this.tiley = tiley;
	this.tileNum	// 4 p1  5 p2  6 p1andp2
}

var mapLength = 1024;
var incomeMapData = new Array();
var x = 0;
var y = 0;
for (var j = 0; j<32;j++){
	for (var i = 0; i < 32; i++) {
		incomeMapData.push(new eachTileData((Math.floor((Math.random()*5000)+1)), 0, 0,i,j,(mapData[Math.floor(j/32)][Math.floor(i/32)]) ));
		// console.log(incomeMapData[i].totalIncome);
		// console.log(incomeMapData[i].tileNum);
		console.log(incomeMapData[i].tilex);
		console.log("Get to the choppa");
		// alert("GET TO THE CHOPPA");
	}
}
// add a factory calculation
function totalScore(incomeMapData) {
    var count = incomeMapData.length;
    var p1TotalScore = 0;
    var p2TotalScore = 0;
    var totalAmountSpent;
    var p1Perc;
    var p2Perc;
    var tempP1Invest;
    var tempP2Invest;
    for (var i = 0; i < count; i++) {
        var tempP1Invest = incomeMapData[i].p1Invest;
        var tempP2Invest = incomeMapData[i].p2Invest;
        if((incomeMapData[i].tileNum == 4) || (incomeMapData[i].tileNum == 6)){
            tempP1Invest = tempP1Invest * 2
        }
        if((incomeMapData[i].tileNum == 5) || (incomeMapData[i].tileNum == 6)){
            tempP2Invest = tempP2Invest * 2
        }
        totalAmountSpent = tempP1Invest + tempP2Invest;
        p1Perc = tempP1Invest / calPercent;
        p2Perc = tempP2Invest / calPercent;
        p1TotalScore += incomeMapData[i].totalIncome * p1Perc;
        p2TotalScore += incomeMapData[i].totalIncome * p2Perc;
    }
    // return
    // edit p1Score in html with p1Totalscore
    // edit p1Score in html with p2Totalscore
}
    
//< ----Volkan Edit --