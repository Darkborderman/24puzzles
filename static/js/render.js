//Render the world
function worldRender(){
    render = Render.create({
        element: Config.render.element,
        engine: engine,
        options: Config.render.option,
    });
    Render.run(render);

    let mouse = Mouse.create(render.canvas);
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: Config.mouse.setting,
    });
    World.add(world, mouseConstraint);
}

//Generage world level
function levelGenerate(currentLevel){

    //create world frame

    let frameData=currentLevel.frame;

    let frame={
        up:Bodies.rectangle(400, 0, 810, 60, Config.frame.setting),
        down:Bodies.rectangle(400, 610, 810, 60, Config.frame.setting),
        left:Bodies.rectangle(0,300,60,610, Config.frame.setting),
        right:Bodies.rectangle(800, 300, 60, 610, Config.frame.setting),
    }
    for(frameDirection in frameData)
    {
        if(frameData[frameDirection]==true)
            World.add(world,frame[frameDirection]);
    }

    //Create player and endpoint
    if(currentLevel.player.type==='rectangle'){
        player=Bodies.rectangle(
            currentLevel.player.position.x,
            currentLevel.player.position.y,
            currentLevel.player.size.width,
            currentLevel.player.size.height,
            Config.player.setting);
    }
    World.add(world,player);

    if(currentLevel.endPoint.type==='rectangle'){
        endPoint=Bodies.rectangle(
            currentLevel.endPoint.position.x,
            currentLevel.endPoint.position.y,
            currentLevel.endPoint.size.width,
            currentLevel.endPoint.size.height,
            Config.endPoint.setting);
    }
    World.add(world,endPoint);

    //get level data
    let rectData=currentLevel.rectangle;
    let cirData=currentLevel.circle;
    let polyData=currentLevel.polygon;
    let triData=currentLevel.trapezoid;
    
    //create world's rectangle bodies
    for(i in rectData)
    {
        let rectChild= Bodies.rectangle(
            rectData[i].position.x,
            rectData[i].position.y,
            rectData[i].size.width,
            rectData[i].size.height,
            rectData[i].option
        );
        World.add(world,rectChild);
    }

    //create world's circle bodies
    for(i in cirData)
    {
        let cirChild=Bodies.circle(
            cirData[i].position.x,
            cirData[i].position.y,
            cirData[i].radius,
            cirData[i].option
        );
        World.add(world,cirChild);
    }
        
    //create world's polygon bodies
    for(i in polyData)
    {
        let polyChild=Bodies.polygon(
            polyData[i].position.x,
            polyData[i].position.y,
            polyData[i].sides,
            polyData[i].radius,
            polyData[i].option
        );
        World.add(world,polyChild);
    }

    //create world's trapezoid bodies
    for(i in triData)
    {
        let triChild=Bodies.trapezoid(
            triData[i].position.x,
            triData[i].position.y,
            triData[i].size.width,
            triData[i].size.height,
            triData[i].slope,
            triData[i].option
        );
        World.add(world,triChild);
    }
    //TODO
    //create world's constraint by world.bodies
    //console.log(world.bodies);
    //Set different method for player and endpoint generate
}