//Render the world
function worldRender(){
    render = Render.create({
        element: Config.render.element,
        engine: engine,
        options: Config.render.options,
    });
    Render.run(render);
}

//Generage world level
function levelGenerate(currentLevel){

    //create world frame
    frameGenerage(currentLevel);

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
            rectData[i].options
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
            cirData[i].options
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
            polyData[i].options
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
            triData[i].options
        );
        World.add(world,triChild);
    }

    //create other bodies

    /*
    rectangle={
        position:{
            x:x,
            y:x
        }
        size:{
            width:x,
            heightx,
        }
        options:{
            isStatic:true,
            render:Config.body.static.render, <-maybe use if to select render
        }
    }
    */

    //TODO
    //create world's constraint by world.bodies
    //console.log(world.bodies);
    //Set different method for player and endpoint generate

}

function frameGenerage(currentLevel)
{
    //generate world frame
    let frame={
        up:Bodies.rectangle(
            Config.canvas.width/2,
            0,
            Config.canvas.width+Config.frame.offset,
            Config.frame.thickness,
            Config.frame.options),
        down:Bodies.rectangle(
            Config.canvas.width/2,
            Config.canvas.height,
            Config.canvas.width+Config.frame.offset,
            Config.frame.thickness,
            Config.frame.options),
        left:Bodies.rectangle(
            0,
            Config.canvas.height/2,
            Config.frame.thickness,
            Config.canvas.height+Config.frame.offset,
            Config.frame.options),
        right:Bodies.rectangle(
            Config.canvas.width,
            Config.canvas.height/2,
            Config.frame.thickness,
            Config.canvas.height+Config.frame.offset,
            Config.frame.options),
    };

    //add frame to the world according to the options
    let frameData=currentLevel.frame;
    for(frameDirection in frameData)
    {
        if(frameData[frameDirection]==true) 
            World.add(world,frame[frameDirection]);
    }
}

function playerGenerate(currentLevel)
{
    if(currentLevel.player.type==='rectangle'){
        player=Bodies.rectangle(
            currentLevel.player.position.x,
            currentLevel.player.position.y,
            currentLevel.player.size.width,
            currentLevel.player.size.height,
            Config.player.options);
    }
    if(currentLevel.player.type==='circle'){
        player=Bodies.circle(
            currentLevel.player.position.x,
            currentLevel.player.position.y,
            currentLevel.player.radius,
            Config.player.options);
    }
    if(currentLevel.player.type==='polygon'){
        player=Bodies.polygon(
            currentLevel.player.position.x,
            currentLevel.player.position.y,
            currentLevel.player.sides,
            currentLevel.player.radius,
            Config.player.options);
    }
    if(currentLevel.player.type==='trapezoid')
    {
        player=Bodies.trapezoid(
            currentLevel.player.position.x,
            currentLevel.player.position.y,
            currentLevel.player.size.width,
            currentLevel.player.size.height,
            currentLevel.player.slope,
            Config.player.options);
    }

    World.add(world,player);
    return player;
}

function endPointGenerate(currentLevel)
{
    if(currentLevel.endPoint.type==='rectangle'){
        endPoint=Bodies.rectangle(
            currentLevel.endPoint.position.x,
            currentLevel.endPoint.position.y,
            currentLevel.endPoint.size.width,
            currentLevel.endPoint.size.height,
            Config.endPoint.options);
    }
    if(currentLevel.endPoint.type==='circle'){
        endPoint=Bodies.circle(
            currentLevel.endPoint.position.x,
            currentLevel.endPoint.position.y,
            currentLevel.endPoint.radius,
            Config.endPoint.options);
    }
    if(currentLevel.endPoint.type==='polygon'){
        endPoint=Bodies.polygon(
            currentLevel.endPoint.position.x,
            currentLevel.endPoint.position.y,
            currentLevel.endPoint.sides,
            currentLevel.endPoint.radius,
            Config.endPoint.options);
    }
    if(currentLevel.endPoint.type==='trapezoid'){
        endPoint=Bodies.trapezoid(
            currentLevel.endPoint.position.x,
            currentLevel.endPoint.position.y,
            currentLevel.endPoint.size.width,
            currentLevel.endPoint.size.height,
            currentLevel.endPoint.slope,
            Config.endPoint.options);
    }

    World.add(world,endPoint);
    return endPoint;
}

//Generate mouse
function mouseGenerate(render){
    let mouse = Mouse.create(render.canvas);
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: Config.mouse.options,
    });
    World.add(world, mouseConstraint);
    return mouseConstraint;
}