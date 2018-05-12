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

// run the engine
Engine.run(engine);

function Start() {
    if(render!=null) return;

    //start rendering
    render = Render.create({
        element: Config.render.element,
        engine: engine,
        options: Config.render.option,
    });
    Render.run(render);

    //Add mouse controller
    let mouse = Mouse.create(render.canvas);
    let mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: Config.mouse.setting,
    });

    World.add(world, mouseConstraint);

    //Add frame to world
    let frame={
        up:Bodies.rectangle(400, 0, 810, 60, Config.frame.setting),
        down:Bodies.rectangle(400, 610, 810, 60, Config.frame.setting),
        left:Bodies.rectangle(0,300,60,610, Config.frame.setting),
        right:Bodies.rectangle(800, 300, 60, 610, Config.frame.setting),
    }
    for(frameData in frame) World.add(world,frame[frameData]);

    let currentLevel=Level[Config.level];
    let rectData=currentLevel.rectangle;
    let player,endPoint;
    if(currentLevel.player.type==='rectangle'){
        player=Bodies.rectangle(
            currentLevel.player.position.x,
            currentLevel.player.position.y,
            currentLevel.player.size.width,
            currentLevel.player.size.height,
            Config.player.setting);
    }
    World.add(world,player);

    //create world's rectangle bodies
    for(i in rectData)
    {
        let rectChild= Bodies.rectangle(
            rectData[i].position.x,
            rectData[i].position.y,
            rectData[i].size.width,
            rectData[i].size.height,
            rectData[i].option
        )
        World.add(world,rectChild);
    }
    /*
    //create x-edge body
    let x=Bodies.polygon(123,456,5,10);
    World.add(world,x);
    //create a triangle
    let y=Bodies.trapezoid(123,456,50,20,2);
    World.add(world,y);
    let c=Bodies.circle(123,456,20);
    World.add(world,c);
    */

    if(currentLevel.endPoint.type==='rectangle'){
        endPoint=Bodies.rectangle(
            currentLevel.endPoint.position.x,
            currentLevel.endPoint.position.y,
            currentLevel.endPoint.size.width,
            currentLevel.endPoint.size.height,
            Config.endPoint.setting);
    }
    World.add(world,endPoint);

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

function Stop(){
    if(render==null) return;
    Matter.Render.stop(render);
    render.canvas.remove();
    render.canvas = null;
    render.context = null;
    render.textures = {};
    render=null;

    Matter.World.clear(engine.world);
    Matter.Engine.clear(engine);
}
