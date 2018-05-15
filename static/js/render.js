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
            rectData[i].x,
            rectData[i].y,
            rectData[i].width,
            rectData[i].height,
            setBodyRender(rectData[i])
        );
        World.add(world,rectChild);
    }

    //create world's circle bodies
    for(i in cirData)
    {
        let cirChild=Bodies.circle(
            cirData[i].x,
            cirData[i].y,
            cirData[i].radius,
            setBodyRender(cirData[i])
        );
        World.add(world,cirChild);
    }
        
    //create world's polygon bodies
    for(i in polyData)
    {
        let polyChild=Bodies.polygon(
            polyData[i].x,
            polyData[i].y,
            polyData[i].sides,
            polyData[i].radius,
            setBodyRender(polyData[i])
        );
        World.add(world,polyChild);
    }

    //create world's trapezoid bodies
    for(i in triData)
    {
        let triChild=Bodies.trapezoid(
            triData[i].x,
            triData[i].y,
            triData[i].width,
            triData[i].height,
            triData[i].slope,
            setBodyRender(triData[i])
        );
        World.add(world,triChild);
    }

    //TODO
    //create world's constraint by world.bodies
    //console.log(world.bodies);

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
            currentLevel.player.x,
            currentLevel.player.y,
            currentLevel.player.width,
            currentLevel.player.height,
            Config.player.options);
    }
    if(currentLevel.player.type==='circle'){
        player=Bodies.circle(
            currentLevel.player.x,
            currentLevel.player.y,
            currentLevel.player.radius,
            Config.player.options);
    }
    if(currentLevel.player.type==='polygon'){
        player=Bodies.polygon(
            currentLevel.player.x,
            currentLevel.player.y,
            currentLevel.player.sides,
            currentLevel.player.radius,
            Config.player.options);
    }
    if(currentLevel.player.type==='trapezoid')
    {
        player=Bodies.trapezoid(
            currentLevel.player.x,
            currentLevel.player.y,
            currentLevel.player.width,
            currentLevel.player.height,
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
            currentLevel.endPoint.x,
            currentLevel.endPoint.y,
            currentLevel.endPoint.width,
            currentLevel.endPoint.height,
            Config.endPoint.options);
    }
    if(currentLevel.endPoint.type==='circle'){
        endPoint=Bodies.circle(
            currentLevel.endPoint.x,
            currentLevel.endPoint.y,
            currentLevel.endPoint.radius,
            Config.endPoint.options);
    }
    if(currentLevel.endPoint.type==='polygon'){
        endPoint=Bodies.polygon(
            currentLevel.endPoint.x,
            currentLevel.endPoint.y,
            currentLevel.endPoint.sides,
            currentLevel.endPoint.radius,
            Config.endPoint.options);
    }
    if(currentLevel.endPoint.type==='trapezoid'){
        endPoint=Bodies.trapezoid(
            currentLevel.endPoint.x,
            currentLevel.endPoint.y,
            currentLevel.endPoint.width,
            currentLevel.endPoint.height,
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

//assign option for body setup
function setBodyRender(bodyData)
{
    if(bodyData.options.canDamage==true)
    {
        bodyData.options.render=Config.body.damage.render;
    }
    else if(bodyData.options.canUndrag==true)
    {
        bodyData.options.render=Config.body.undrag.render;
    }
    else if(bodyData.options.isStatic==true)
    {
        bodyData.options.render=Config.body.static.render;
    }
    else
    {
        bodyData.options.render=Config.body.dynamic.render;
    }
    return bodyData.options;
}