
enchant();

// $(window).resize(function(){
  // var w = $(window).width();
  // var h = $(window).height();
  // $("canvas, #enchant-stage, #enchant-stage > div").css({
    // width: w + "px",
    // height: h + "px"
  // });
  // $("canvas")[0].width = w;
  // $("canvas")[0].height = h;
  
  // game.width = w;
  // game.height = h;
  
  // var ctx = $("canvas")[0].getContext("2d");
  // ctx.clearRect(0,0,w,h);
// });

var tileNumber ;
var mapData = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 4, 3, 4, 3, 4, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 4, 4, 3, 3, 4, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 4, 3, 3, 3, 3, 3, 4, 3, 4, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 4, 3, 4, 3, 4, 3, 3, 3, 2, 1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 4, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 4, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 2, 3, 4, 4, 3, 3, 3, 3, 3, 4, 3, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 2, 3, 4, 3, 3, 3, 3, 3, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 4, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 4, 3, 3, 3, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 3, 3, 3, 4, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 2, 2, 2, 2, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 3];
//returns a pair of x,y coordinates
var getTile = function(x,y) {

return { x: Math.floor(y/32), y: Math.floor(x/32)};
}	

var getTileNum = function(x,y) {

return mapData[Math.floor(y/32)][Math.floor(x/32)];
}	





window.onload = function(){
    var game = new Core(1024, 1024);
	
    game.fps = 15;

	game.preload('tileset-32.png');

	//game.preload('NyanCat.wav');
		  
  game.onload = function() {
    //game.assets['NyanCat.wav'].play();
	
		console.log("test");
		var map = new Map(32,32);
        map.image = game.assets['tileset-32.png'];
		
		var _tmp = [];
		for (var i=0; i<mapData.length; i++)
		{
			if (!(i%32))
				_tmp.push([]);
			_tmp[_tmp.length-1].push(mapData[i]-1);
		}
		mapData = _tmp;
		
        map.loadData(mapData);
		
		var Player1 = new enchant.Label();
        Player1.text = "Player 1";
        Player1.width = 128;
        Player1.height = 64;
        Player1.font = "22px 'Arial'";
		
		var Score = new enchant.Label();
		Score.x = 800;
		Score.text = "SCORE:"	
        Score.width = 128;
        Score.height = 64;
        Score.font = "22px 'Arial'";
        
		// label.x = 100;
		// label.y = 20;

		
		
		game.score = 0;
		// scoreLabel = new ScoreLabel(8,8);
		// scoreLabel.score = game.score ;
		
		// map.addEventListener('enterframe', function(O){
			// tileNumber = getTileNum(O.x,.O.y);
			
			// if (tileNumber ==2 || tileNumber = 4 || tileNumber = 5 || tileNumber = 6){
					
					
		// for (var j = 0; j<1024 ;j++){
				
				// if (incomeMapData[j].tilex == e.x && incomeMapData[j].tiley == e.y){
					// console.log(incomeMapData[j].totalIncome);
				// }
				
		// }
					
					
					
			
			// }
		
			// })
		
		
		
		
		
		
		
		game.rootScene.addChild(map);
		game.rootScene.addChild(Player1);
		game.rootScene.addChild(Score);
		game.rootScene.addEventListener('touchend',function (e) {
		coord = getTile(e.x,e.y);
        tileNumber = getTileNum(e.x,e.y);
				
		console.log([Math.floor(e.y/32)][Math.floor(e.x/32)]);	

		
		if (tileNumber ==3 || tileNumber==0 || tileNumber==1)
		{
		alert("You cant buy this tile!")
	    }
               
	        if(tileNumber ==2)
                {	
		$('#windowTitleDialog').modal('show');
                }
		//mapData[coord.x][coord.y]++; 
		//map.loadData(mapData);
		}
	
		
		);
		
    };
	
    game.start();
};
