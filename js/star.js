var game;

// layer variables
var starLayer;

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
	
	var starScale = game.rnd.integerInRange(50, 100) / 100;
	starImage.scale.setTo(starScale, starScale);
	starImage.x = game.rnd.integerInRange(0, 500) + 200;
	starImage.y = 100;
	
	var starMovement = [0, 0];
	
	if(Math.floor(Math.random() * 100) > 0) {//75) {
		var xVelocity = Math.random() * 20 - 10;
		var yVelocity = Math.random() * 20 - 10;
		starMovement = [xVelocity, yVelocity];
	}
	// star movement
	var starMover = setInterval(function() {
		starImage.x += xVelocity;
		starImage.y += yVelocity;
	}, 50);
	
	starMovements.push(starMovement);
	
	// hides the star from the screen
	var removeStar = function() {
		starImage.visible = false;
		starManager.increaseVisibleCount();
		window.clearInterval(starMover);
	}
	game.time.events.add(Phaser.Timer.SECOND * (Math.random() * (maxTimeActive - minTimeActive)) + minTimeActive, removeStar, this);
}

Star.prototype.generateNewStar = function () {
	starCreation();
}

/*
- timer for amount of time the star is shown
	- Star(color, widthMax, heightMax)
		- luminosity
		- location
			- random of widthMax + heightMax
*/