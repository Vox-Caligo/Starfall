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
	var newStar;
	
	for(var i = 0; i < starAmount; i++) {
		newStar = new Star(game, starLayer);
		newStar.generateNewStar();
		
		var removeStar = function() {
			console.log('Poof');
			newStar.starImage.visible = false;
		}
		
		game.time.events.add(Phaser.Timer.SECOND * 1, removeStar, newStar);
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