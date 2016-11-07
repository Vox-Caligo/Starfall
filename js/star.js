var game;
var starImage;

var starChoices = ['star_red', 'star_yellow', 'star_green', 'star_blue'];

function Star(currentGame, layer) {
	game = currentGame;
	
	starImage = layer.create(200, 200, starChoices[game.rnd.integerInRange(0, starChoices.length)]);
	starImage.anchor.setTo(.5, .5);
	
	var starScale = game.rnd.integerInRange(50, 100) / 100;
	starImage.scale.setTo(starScale, starScale);
	starImage.x = game.rnd.integerInRange(0, 500);
	starImage.y = 100;
	console.log('Hit');
}

Star.prototype.generateNewStar = function () {
	 
}

/*
- timer for amount of time the star is shown
	- Star(color, widthMax, heightMax)
		- luminosity
		- size
		- location
			- random of widthMax + heightMax
*/