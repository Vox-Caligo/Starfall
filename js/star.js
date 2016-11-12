var game;

var starChoices = ['star_red', 'star_yellow', 'star_green', 'star_blue'];

// layer variables
var starLayer;

// movement variables
var movingStar = true;
var xVelocity;
var yVelocity;

// active variables
var minTimeActive = 1;
var maxTimeActive = 3;

function Star(currentGame, layer) {
	game = currentGame;
	starLayer = layer;
	starCreation();
}

// creates a star
function starCreation() {
	var starImage;
	var starColor;
	
	starColor = starChoices[game.rnd.integerInRange(0, starChoices.length)];
	
	starImage = starLayer.create(200, 200, starColor);
	starImage.anchor.setTo(.5, .5);
	
	var starScale = game.rnd.integerInRange(50, 100) / 100;
	starImage.scale.setTo(starScale, starScale);
	starImage.x = game.rnd.integerInRange(0, 500);
	starImage.y = 100;
	
	if(movingStar) {
		game.time.events.add(0, starMovement, this);
	}
	
	var removeStar = function() {
		starImage.visible = false;
	}
	game.time.events.add(Phaser.Timer.SECOND * ((Math.random() * (maxTimeActive - minTimeActive)) + minTimeActive), removeStar, this);
}

function starMovement() {
	
}

Star.prototype.generateNewStar = function () {
	starCreation();
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