enchant();

var mapData = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 4, 4, 3, 3, 4, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 4, 4, 3, 3, 3, 3, 3, 4, 3, 4, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 4, 3, 4, 3, 4, 3, 3, 3, 2, 1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 4, 4, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 4, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 2, 3, 4, 4, 3, 3, 3, 3, 3, 4, 3, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 2, 3, 4, 3, 3, 3, 3, 3, 4, 4, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 4, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 4, 3, 3, 3, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 3, 3, 3, 4, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 2, 2, 2, 2, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 4, 4, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 4, 4, 3];
var TILE_SIZE = 32,
	MAP_WIDTH = 32,
	MAP_HEIGHT = 32;

// Returns a pair of x,y coordinates
var getTile = function(x,y) {
	return { x: Math.floor(y/TILE_SIZE), y: Math.floor(x/TILE_SIZE)};
};

// Returns tile ID at coordinates
var getTileNum = function(x,y) {
	return mapData[Math.floor(y/TILE_SIZE)][Math.floor(x/TILE_SIZE)];
};

// Converts map from flat array into 2D array
var parseMap = function (_data, width)
{
	var _tmp = [];
	for (var i=0; i<_data.length; i++)
	{
		if (!(i%width))
			_tmp.push([]);
		_tmp[_tmp.length-1].push(_data[i]-1);
	}
	return _tmp;	
};

window.onload = function(){

    var game = new Core(1024, 1024);
	
    game.fps = 15;

	game.preload('tileset-32.png');
	game.preload('NyanCat.ogg');

  	game.onload = function() {

  		console.log("Loading ...");

    	game.assets['NyanCat.ogg'].play();
	
		var map = new Map(TILE_SIZE, TILE_SIZE);
        map.image = game.assets['tileset-32.png'];
		
        mapData = parseMap(mapData, MAP_WIDTH);
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
        
		game.score = 0;
		// scoreLabel = new ScoreLabel(8,8);
		// scoreLabel.score = game.score ;
		
		game.rootScene.addChild(map);
		game.rootScene.addChild(Player1);
		game.rootScene.addChild(Score);
		game.rootScene.addEventListener('touchend',function (e) {
			coord = getTile(e.x,e.y);
			$('#windowTitleDialog').modal('show');
			mapData[coord.x][coord.y]++; 
			map.loadData(mapData);
		});

		console.log("Complete.");
    };
	
    game.start();
};

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