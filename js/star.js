var game;
var starImage;

var starChoices = ['star_red', 'star_yellow', 'star_green', 'star_blue'];

// movement variables
var movingStar = true;
var xVelocity;
var yVelocity;

function Star(currentGame, layer) {
	game = currentGame;
	
	var starColor = starChoices[game.rnd.integerInRange(0, starChoices.length)];
	console.log('Test: ' + starColor);
	starImage = layer.create(200, 200, starColor);
	starImage.anchor.setTo(.5, .5);
	
	var starScale = game.rnd.integerInRange(50, 100) / 100;
	starImage.scale.setTo(starScale, starScale);
	starImage.x = game.rnd.integerInRange(0, 500);
	starImage.y = 100;
	
	if(movingStar) {
		game.time.events.add(0, starMovement, this);
	}
	
	game.time.events.add(Phaser.Timer.SECOND * 3, removeStar, this);
}

Star.prototype.generateNewStar = function () {
	 
}

function starMovement() {
	
}

function removeStar() {
	console.log('Poof');
	this.starImage.visible = false;
}

/*
- timer for amount of time the star is shown
	- Star(color, widthMax, heightMax)
		- luminosity
		- size
		- location
			- random of widthMax + heightMax
*/