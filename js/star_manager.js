var game;

var stars = new Array();
var starAmount = 3;

var activeStars;
var neededColors;
var starsShowing;

function StarManager(currentGame, starLayer) {
	game = currentGame;
	generateStars(starLayer);
}

function generateStars(starLayer) {
	for(var i = 0; i < starAmount; i++) {
		var newStar = new Star(game, starLayer);
		stars.push(newStar);
	}
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

/*
- round
- algorithm
- playing
- endRound
- removeStars
*/