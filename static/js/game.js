let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

//sfx import
let audio = new Audio('static/sfx/ding.mp3');

// create a Matter.js engine
let engine = Engine.create();
world = engine.world;
engine.world.gravity=Config.engine.gravity;

//create world render
let render=null;
let mouseConstraint=null;
let player=null,endPoint=null;

// run the engine
Engine.run(engine);

function gameStart() {
    //Detect the world has been generated or not
    if(render!=null) return;

    worldRender();

    let currentLevel=Level[Config.level];
    levelGenerate(currentLevel);

    //detect game end or not
    Events.on(engine, 'collisionStart', function(event) {
        let pairs = event.pairs;

        for (let i = 0, j = pairs.length; i != j; ++i) {
            let pair = pairs[i];
            if (pair.bodyA === endPoint&&pair.bodyB===player) {
                pair.bodyA.render.strokeStyle = 'white';
                audio.play();
            } else if (pair.bodyB === endPoint&&pair.bodyA===player) {
                pair.bodyB.render.strokeStyle = 'white';
                audio.play();
            }
        }
    });

    //Player can drag any non-static object except main character
    Events.on(mouseConstraint, "startdrag", function(event){
        if(event.body.label=="player"){
            event.body.isStatic=true;
        }
    });
    Events.on(mouseConstraint, "enddrag", function(event){
        if(event.body.label=="player"){
            event.body.isStatic=false;
        }
    });
}

function gameReset(){
    if(render==null) return;
    Matter.Render.stop(render);
    render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
    render=null;

    Matter.World.clear(engine.world);
    Matter.Engine.clear(engine);
    gameStart();
}

//Use event listener to replace inline HTML
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('start').addEventListener('click',function(){
        gameStart();
    });
    document.getElementById('reset').addEventListener('click',function(){
        gameReset();
    });
    Config.level = document.getElementById("selection").value;
    gameStart();
});
document.getElementById('selection').addEventListener('change',function(){
    Config.level = document.getElementById("selection").value;
    gameReset();
});