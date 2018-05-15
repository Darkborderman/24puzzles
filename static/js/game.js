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

// run the engine
Engine.run(engine);

//create world render
let render=null;

function gameStart() {
    //Detect the world has been generated or not
    if(render!=null) return;

    let Time={
        startDate:new Date(),
        endDate:null,
        isFinish:false,
    };

    //game render
    worldRender();

    let currentLevel=Level[Config.level];
    levelGenerate(currentLevel);

    let player=new playerGenerate(currentLevel);
    let endPoint=new endPointGenerate(currentLevel);
    let mouseConstraint=new mouseGenerate(render);

    //game event detect
    Events.on(engine, 'collisionStart', function(event) {
        let pairs = event.pairs;

        for (let i=0, j=pairs.length;i!=j;++i){
            let pair = pairs[i];
            if (pair.bodyA === endPoint&&pair.bodyB===player) {
                pair.bodyA.render.strokeStyle = 'white';
                gameFinish(Time);
            }
            else if (pair.bodyB === endPoint&&pair.bodyA===player) {
                pair.bodyB.render.strokeStyle = 'white';
                gameFinish(Time);
            }
        }
    });

    Events.on(mouseConstraint, 'startdrag', function(event){
        if(event.body.canUndrag){
            event.body.isStatic=true;
        }
    });
    Events.on(mouseConstraint, 'enddrag', function(event){
        if(event.body.canUndrag){
            event.body.isStatic=false;
        }
    });
}

function gameReset(){
    if(render==null) return;
    Render.stop(render);
    render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
    render=null;

    World.clear(engine.world);
    Engine.clear(engine);
    gameStart();
}

function gameFinish(Time){
    audio.play();
    if(!Time.isFinish)
    {
        Time.endDate=new Date();
        let elapsedTime=(Time.endDate.getTime() - Time.startDate.getTime()) / 1000;
        document.getElementById('time').innerHTML='Spent time: '+elapsedTime+' seconds';
        Time.isFinish=true;
    } 
}

//Start game when web is ready
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('reset').addEventListener('click',function(){
        document.getElementById('time').innerHTML='Spent time';
        gameReset();
    });
    document.getElementById('time').innerHTML='Spent time';
    Config.level=document.getElementById('selection').value;
    gameStart();
});

//Reset game when changing the level
document.getElementById('selection').addEventListener('change',function(){
    Config.level=document.getElementById('selection').value;
    document.getElementById('time').innerHTML='Spent time';
    gameReset();
});