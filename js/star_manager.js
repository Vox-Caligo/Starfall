var game;

// star variables
var stars = new Array();
var starAmount = 13;

// color variables
var starChoices = ['star_red', 'star_yellow', 'star_green', 'star_blue'];
var neededColors = new Array();

var activeStars;
var starsShowing;
var starLayer;

function StarManager(currentGame, givenStarLayer) {
	game = currentGame;
	starLayer = givenStarLayer;
	
	// used to create the first group of stars
	for(var i = 0; i < starAmount; i++) {
		var starColor = starChoices[game.rnd.integerInRange(0, starChoices.length - 1)];
		var newStar = new Star(game, starLayer, starColor);
		neededColors.push(starColor);
		stars.push(newStar);
	}
}

function starRemoval(starNumber) {
	starLayer.remove(stars[starNumber]);
}

StarManager.prototype.spawnStars = function () {
	/*
	- neededColors.push(color)
	- create star
	*/
}

StarManager.prototype.areStarsShowing = function () {
	return starsShowing;
}

StarManager.prototype.getNeededColors = function () {	
	return neededColors;
}

StarManager.prototype.getStarAmount = function () {
	return starAmount;
}

/*
- round
- algorithm
- playing
- endRound
- removeStars
*/