var game;

// star variables
var stars = new Array();
var starAmount = 3;
var startingStarAmount = 3;
var starsVisible = 0;
var starLayer;

// color variables
var starChoices = ['star_red', 'star_yellow', 'star_green', 'star_blue'];
var neededColors;

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
	
	// used to create the first group of stars
	start();
}

function createNewStar() {
	starTimeStart += Phaser.Timer.SECOND * ((Math.random() * (maxSpawnDelay - minSpawnDelay)) + minSpawnDelay);
	var starColor = starChoices[game.rnd.integerInRange(0, starChoices.length - 1)];
	var newStar = new Star(game, this, starLayer, starColor, starTimeStart, minTimeActive, maxTimeActive);
	neededColors.push(starColor);
	stars.push(newStar);
}

function start() {
	for(var i = 0; i < starAmount; i++) {
		createNewStar();
	}
}

function reset(resetStarCount) {
	starTimeStart = 0
	starsVisible = 0;
	neededColors = new Array();
	
	// used for restarting the game as opposed to the next round
	if(resetStarCount) {
		starAmount = startingStarAmount;
	}
}

StarManager.prototype.areStarsShowing = function () {
	if(starsVisible >= starAmount) {
		starsVisible = 0;
		return false;
	}
	return true;
}

// resets all stars for the next round
StarManager.prototype.nextRound = function() {
	reset();
	
	for(var i = 0; i < stars.length; i++) {
		stars[i].generateNewStar();
	}
}

StarManager.prototype.addStar = function () {
	createNewStar();
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

/*
- round
- algorithm
- playing
- endRound
- removeStars
*/