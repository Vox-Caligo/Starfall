var game;

// layer variables
var starLayer;

var starManager;

// movement variables
var movingStar = true;
var xVelocity;
var yVelocity;

// timer variables
var spawnTime;

function Star(currentGame, manager, layer, starColor, starTimeStart, minActive, maxActive) {
	game = currentGame;
	starManager = manager;
	starLayer = layer;
	
	var creation = function() {
		starCreation(starColor, minActive, maxActive);
	}
	
	game.time.events.add(starTimeStart, creation, this);
}

// creates a star
function starCreation(starColor, minActive, maxActive) {
	var starImage = starLayer.create(200, 200, starColor);
	starImage.anchor.setTo(.5, .5);
	
	var starScale = game.rnd.integerInRange(50, 100) / 100;
	starImage.scale.setTo(starScale, starScale);
	starImage.x = game.rnd.integerInRange(0, 500) + 200;
	starImage.y = 100;

	// used to move the star across the screen
	if(movingStar) {
		game.time.events.add(0, starMovement, this, starImage);
	}
	
	// hides the star from the screen
	var removeStar = function() {
		starImage.visible = false;
		starManager.increaseVisibleCount();
	}
	game.time.events.add(Phaser.Timer.SECOND * (Math.random() * (maxTimeActive - minTimeActive)) + minTimeActive, removeStar, this);
}

function starMovement() {
	
}

Star.prototype.getStarColor = function () {
	 return starColor;
}

Star.prototype.generateNewStar = function () {
	starCreation();
}

/*
- timer for amount of time the star is shown
	- Star(color, widthMax, heightMax)
		- luminosity
		- size
		- location
			- random of widthMax + heightMax
*/