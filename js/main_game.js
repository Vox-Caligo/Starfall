var game = new Phaser.Game(window.screen.width, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// spawn floor
var spawnFloor = screen.height - (.3 * screen.height);

// visual layers 
var background;
var midground;
var foreground;
var hud;

// buttons
var buttons = new Array();

// colors clicked
var clickedColors = new Array();

// star manager
var starManager;

function preload() {
	// add visual layers
	backgroundImages = game.add.group();
	midgroundImages = game.add.group();
	foregroundImages = game.add.group();
	hudImages = game.add.group();

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
	var background = game.add.sprite(0, 0, 'background');
	background.height = game.height;
	background.width = game.width;
	game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	
	starManager = new StarManager(game, foregroundImages);
	createButtons();
}

function createButtons() {
	var buttonHeight = 50;
	var buttonWidth = game.width * .25;
	var buttonYLoc = game.height - buttonHeight;
	
	var button_red = game.add.button(0, buttonYLoc, 'button_red', selectedButton, this, 2, 1, 0);
	button_red.name = "red";
	buttons.push(button_red);
	
	var button_yellow = game.add.button(buttonWidth, buttonYLoc, 'button_yellow', selectedButton, this, 2, 1, 0);
	button_yellow.name = "yellow";
	buttons.push(button_yellow);
	
	var button_green = game.add.button(buttonWidth * 2, buttonYLoc, 'button_green', selectedButton, this, 2, 1, 0);
	button_green.name = "green";
	buttons.push(button_green);
	
	var button_blue = game.add.button(buttonWidth * 3, buttonYLoc, 'button_blue', selectedButton, this, 2, 1, 0);
	button_blue.name = "blue";
	buttons.push(button_blue);
	
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].height = buttonHeight;
		buttons[i].width = buttonWidth;
		//buttons[i].visible = false;
	}
}

function selectedButton(button) {
	console.log('Color Selected: ' + button.name);
	clickedColors.push(button.name);
	
	if(clickedColors == 3) {
		
	}
}

function gofull() {
    if (game.scale.isFullScreen) {
        game.scale.stopFullScreen();
    } else {
        game.scale.startFullScreen(false);
    }
}

function update() {
	
	/*
	- color buttons (blue, green, yellow, red)
		- attach function that updates star manager when visible
	- updating
		- hide buttons when star manager is playing
	*/
}	