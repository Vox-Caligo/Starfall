var game = new Phaser.Game(window.screen.width, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });

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
}

function create() {
	var background = backgroundLayer.create(0, 0, 'background');
	background.height = game.height;
	background.width = game.width;
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	
	starManager = new StarManager(game, foregroundLayer);
	createButtons();
}

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

function selectedButton(button) {
	var chosenColor = button.name;
	var neededColors = starManager.getNeededColors();
	
	if(chosenColor != neededColors[currentStar]) {
		console.log("Incorrect Choice - Was looking for " + neededColors[currentStar]);
		
		for(var i = 0; i < neededColors.length; i++) {
			console.log("Star #" + i + ": " + neededColors[i]);
			// colors are being generated wrong
		}
		// end game
	} else {
		currentStar++;
		
		if(currentStar == starManager.getStarAmount()) {
			console.log("success");
			//starManager.nextRound();
		}
	}
}

function gofull() {
    if (game.scale.isFullScreen) {
        game.scale.stopFullScreen();
    } else {
        game.scale.startFullScreen(false);
    }
}

function buttonVisibility(isVisible) {
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].visible = isVisible;
	}
}

function update() {
	if(!starManager.areStarsShowing()) {
		buttonVisibility(true);
	}
	/*
	- color buttons (blue, green, yellow, red)
		- attach function that updates star manager when visible
	- updating
		- hide buttons when star manager is playing
	*/
}	