// You could have multiple flags like: start, launch to indicate the state of the game.
var TankState = "AIM";

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var engine,world;
var tank,ground,cannonball;
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1200,600);

    tank = new Tanker(200,1180,10,10);

    ground = new Ground(600,1195,1200,10);

    cannonball = new CanonBall(tank.x,tank.y,10,10);
    cannonball.visible=false;
}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
Engine.update(engine);
ground.display();
tank.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
    if(keyDown("space")){
        cannonball.visible=true;
        cannonball.velocityX=10;
        cannonball.velocityY=1;
    }
}