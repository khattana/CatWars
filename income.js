// ----Volkan Edit --
//Create a function will find who is the player
// Do it when reading the menu 

function eachTileData(totalIncome, p1Invest, p2Invest, tileNum) {
    this.totalIncome = totalIncome;
    this.p1Invest = p1Invest;
    this.p2Invest = p2Invest;
    this.tileNum = tileNum; // 4 p1  5 p2  6 p1andp2
}



var player1;
var player2;
var currentplayer;
var player1Score = 1000; 
var player2Score = 1000;
var currentplayerscore = 0;

function player ( playerNumber, playerScore){
	this.playerNumber = playerNumber;
	this.playerScore = playerScore;
}



var mapLength = 1024;
var incomeMapData = new Array();
var x = 0;
var y = 0;
for (var i = 0; i < mapLength; i++) {
    incomeMapData.push(new eachTileData((Math.floor((Math.random()*5000)+1)), 0, 0, (mapData[i])));
}

// add a factory calculation
function totalScore(incomeMapData) {
    var count = incomeMapData.length;
    var p1TotalScore = 0; // get total score from main
    var p2TotalScore = 0; // get total score from main
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
        p1Perc = tempP1Invest / totalAmountSpent;
        p2Perc = tempP2Invest / totalAmountSpent;
        p1TotalScore += incomeMapData[i].totalIncome * p1Perc;
        p2TotalScore += incomeMapData[i].totalIncome * p2Perc;
    }
    // return
    // edit p1Score in html with p1Totalscore
    // edit p1Score in html with p2Totalscore
}
    
//< ----Volkan Edit --