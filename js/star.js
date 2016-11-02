var game;
var starImage;
var starLayer;

var starChoices = ['star_red', 'star_yellow', 'star_green', 'star_blue'];

function Star(layer) {
	starLayer = layer;
	starImage = starLayer.create(0, 0, starChoices[0]);
	starImage.x = 100;
	starImage.y = 100;
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