var game;

// layer variables
var starLayer;

// parent manager
var starManager;

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
	
	// determines star size and location
	var starScale = game.rnd.integerInRange(50, 100) / 100;
	starImage.scale.setTo(starScale, starScale);
	starImage.x = game.rnd.integerInRange(0, 500) + 200;
	starImage.y = 100;

	// determines star movement
	var starMovement = starMovementCalculation();
	var isMoving = (starMovement[0] > 0 || starMovement[1] > 0);

	if(isMoving) {
		var starMover = setInterval(function() {
			starImage.x += starMovement[0];
			starImage.y += starMovement[1];
		}, 50);
	}
	
	// hides the star from the screen
	var removeStar = function() {
		starImage.visible = false;
		starManager.increaseVisibleCount();
		
		if(isMoving) {
			window.clearInterval(starMover);
		}
	}
	game.time.events.add(Phaser.Timer.SECOND * (Math.random() * (maxTimeActive - minTimeActive)) + minTimeActive, removeStar, this);
}

// calculates if and how a star will move
function starMovementCalculation() {	
	if(Math.floor(Math.random() * 100) > 0) {//75) {
		var xVelocity = Math.random() * 20 - 10;
		var yVelocity = Math.random() * 20 - 10;
		return [xVelocity, yVelocity];
	}
	
	return [0, 0]
}

Star.prototype.generateNewStar = function (starColor, starTimeStart, minActive, maxActive) {
	var creation = function() {
		starCreation(starColor, minActive, maxActive);
	}
	
	game.time.events.add(starTimeStart, creation, this);
}

/*
- timer for amount of time the star is shown
	- Star(color, widthMax, heightMax)
		- luminosity
		- location
			- random of widthMax + heightMax
*/