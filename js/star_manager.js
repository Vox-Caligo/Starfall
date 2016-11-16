var game;

// star variables
var stars = new Array();
var starAmount = 3;
var starsVisible = 0;

// color variables
var starChoices = ['star_red', 'star_yellow', 'star_green', 'star_blue'];
var neededColors;
var starMovements;

var activeStars;
var starsShowing;
var starLayer;

// timer variables
var minSpawnDelay = .5;
var maxSpawnDelay = 3;
var minTimeActive = 2;
var maxTimeActive = 7;

// stars active time
var starTimeStart = 0;

function StarManager(currentGame, givenStarLayer) {
	game = currentGame;
	starLayer = givenStarLayer;
	neededColors = new Array();
	starMovements = new Array();
	
	// used to create the first group of stars
	starsShowing = true;
	
	for(var i = 0; i < starAmount; i++) {
		createNewStar();
	}
}

function createNewStar() {
	starTimeStart += Phaser.Timer.SECOND * ((Math.random() * (maxSpawnDelay - minSpawnDelay)) + minSpawnDelay);
	var starColor = starChoices[game.rnd.integerInRange(0, starChoices.length - 1)];
	var newStar = new Star(game, this, starLayer, starColor, starTimeStart, minTimeActive, maxTimeActive);
	neededColors.push(starColor);
	stars.push(newStar);
}

StarManager.prototype.addStar = function () {
	createNewStar();
}

StarManager.prototype.areStarsShowing = function () {
	if(starsVisible == starAmount) {
		starsVisible = 0;
		starsShowing = false;
	}
	return starsShowing;
}

StarManager.prototype.getNeededColors = function () {	
	return neededColors;
}

StarManager.prototype.getStarAmount = function () {
	return starAmount;
}

StarManager.prototype.increaseVisibleCount = function () {
	starsVisible++;
}

// resets all stars for the next round
StarManager.prototype.nextRound = function() {
	for(var i = 0; i < stars.length; i++) {
		stars[i].generateNewStar();
	}
}

/*
- round
- algorithm
- playing
- endRound
- removeStars
*/