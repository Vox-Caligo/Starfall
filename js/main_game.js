var game = new Phaser.Game(window.screen.width, 500, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// spawn floor
var spawnFloor = screen.height - (.3 * screen.height);

// visual layers 
var backgroundLayer;
var midgroundLayer;
var foregroundLayer;
var hudLayer;

// buttons
var buttons = new Array();

// star manager
var starManager;
var currentStar = 0;

// loads all needed images
function preload() {
	// add visual layers
	backgroundLayer = game.add.group();
	midgroundLayer = game.add.group();
	foregroundLayer = game.add.group();
	hudLayer = game.add.group();

	game.load.image('background', 'assets/background/background.jpg');
	
	game.load.image('star_red', 'assets/stars/star_red.png');
	game.load.image('star_yellow', 'assets/stars/star_yellow.png');
	game.load.image('star_green', 'assets/stars/star_green.png');
	game.load.image('star_blue', 'assets/stars/star_blue.png');
	
	game.load.image('button_red', 'assets/buttons/button_red.png');
	game.load.image('button_yellow', 'assets/buttons/button_yellow.png');
	game.load.image('button_green', 'assets/buttons/button_green.png');
	game.load.image('button_blue', 'assets/buttons/button_blue.png');
	
	//this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	console.log("Cmon Man");
}

// creates the game
function create() {
	var background = backgroundLayer.create(0, 0, 'background');
	background.height = game.height;
	background.width = game.width;
	
	starManager = new StarManager(game, foregroundLayer);
	createButtons();
}

// creates all of the buttons for play
function createButtons() {
	var buttonHeight = 50;
	var buttonWidth = game.width * .25;
	var buttonYLoc = game.height - buttonHeight;
	
	var button_red = game.add.button(0, buttonYLoc, 'button_red', selectedButton, this, 2, 1, 0);
	button_red.name = "star_red";
	buttons.push(button_red);
	
	var button_yellow = game.add.button(buttonWidth, buttonYLoc, 'button_yellow', selectedButton, this, 2, 1, 0);
	button_yellow.name = "star_yellow";
	buttons.push(button_yellow);
	
	var button_green = game.add.button(buttonWidth * 2, buttonYLoc, 'button_green', selectedButton, this, 2, 1, 0);
	button_green.name = "star_green";
	buttons.push(button_green);
	
	var button_blue = game.add.button(buttonWidth * 3, buttonYLoc, 'button_blue', selectedButton, this, 2, 1, 0);
	button_blue.name = "star_blue";
	buttons.push(button_blue);
	
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].height = buttonHeight;
		buttons[i].width = buttonWidth;
		buttons[i].visible = false;
	}
}

// determines if the selected button was the correct color 
function selectedButton(button) {
	var chosenColor = button.name;
	var neededColors = starManager.getNeededColors();
	
	if(chosenColor != neededColors[currentStar]) {
		console.log("Incorrect Choice - Was looking for " + neededColors[currentStar]);
		
		// end game
	} else {
		currentStar++;
		
		// detects if the user hits enough stars to get to the next round
		if(currentStar == starManager.getStarAmount()) {
			currentStar = 0;
			starManager.nextRound();
		}
	}
}

// changes button visibility
function buttonVisibility(isVisible) {
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].visible = isVisible;
	}
}

// what to do after the game ends
function endGame() {
	
}

function update() {
	// shows buttons when stars are not going to be shown adn vice versa
	console.log("Visible Stars: " + starManager.areStarsShowing());
	if(!starManager.areStarsShowing()) {
		buttonVisibility(true);
	} else {
		buttonVisibility(false);
	}
}	