let Level={};

Level.level1={
    player:{
        type:'rectangle',
        position:{
            x:200,
            y:100,
        },
        size:{
            width:40,
            height:40,
        },
    },
    rectangle:[
        {
            position:{
                x:100,
                y:250,
            },
            size:{
                width:120,
                height:20,
            },
            option:{
                render:Config.body.dynamic.render,
            },
        },
    ],
    circle:[],
    polygon:[],
    trapezoid:[],
    endPoint:{
        type:'rectangle',
        position:{
            x:720,
            y:550,
        },
        size:{
            width:40,
            height:40,
        },
    },
    frame:{
        up:true,
        down:true,
        left:true,
        right:true,
    },
};

Level.level2={
    player:{
        type:'rectangle',
        position:{
            x:150,
            y:50,
        },
        size:{
            width:40,
            height:40,
        },
    },
    rectangle:[
        {
            position:{
                x:350,
                y:100,
            },
            size:{
                width:700,
                height:20,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:500,
                y:200,
            },
            size:{
                width:700,
                height:20,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:100,
                y:50,
            },
            size:{
                width:40,
                height:40,
            },
            option:{
                render:Config.body.dynamic.render,
            },
        },
    ],
    circle:[
        {
            position:{
                x:123,
                y:456,
            },
            radius:20,
            option:{
                render:Config.body.dynamic.render,
            },
        },
    ],

    polygon:[
        {
            position:{
                x:123,
                y:456,
            },
            sides:5,
            radius:20,
            option:{
                render:Config.body.dynamic.render,
            },
        },
    ],
    trapezoid:[
        {
            position:{
                x:100,
                y:510,
            },
            size:{
                width:200,
                height:200,
            },
            slope:2,
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
    ],
    endPoint:{
        type:'rectangle',
        position:{
            x:720,
            y:550,
        },
        size:{
            width:40,
            height:40,
        },
    },
    frame:{
        up:true,
        down:true,
        left:true,
        right:true,
    },
};

Level.level3={
    player:{
        type:'rectangle',
        position:{
            x:500,
            y:100,
        },
        size:{
            width:40,
            height:40,
        },
    },
    rectangle:[
        {
            position:{
                x:500,
                y:250,
            },
            size:{
                width:500,
                height:10,
            },
            option:{
                render:Config.body.dynamic.render,
            },
        },
        {
            position:{
                x:700,
                y:550,
            },
            size:{
                width:10,
                height:30,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
    ],
    circle:[
        {
            position:{
                x:123,
                y:456,
            },
            radius:50,
            option:{
                density:0.1,
                render:Config.body.dynamic.render,
            },
        },
    ],
    polygon:[],
    trapezoid:[
        {
            position:{
                x:400,
                y:540,
            },
            size:{
                width:300,
                height:100,
            },
            slope:1,
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
    ],
    endPoint:{
        type:'rectangle',
        position:{
            x:100,
            y:100,
        },
        size:{
            width:40,
            height:40,
        },
    },
    frame:{
        up:true,
        down:true,
        left:true,
        right:true,
    },
};

Level.level4={
    player:{
        type:'rectangle',
        position:{
            x:100,
            y:450,
        },
        size:{
            width:40,
            height:40,
        },
    },
    rectangle:[
        {
            position:{
                x:100,
                y:500,
            },
            size:{
                width:120,
                height:10,
            },
            option:{
                frictionAir: 0.5,
                density:10,
                render:Config.body.dynamic.render,
            },
        },
        {
            position:{
                x:100,
                y:550,
            },
            size:{
                width:160,
                height:10,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:360,
                y:400,
            },
            size:{
                width:650,
                height:10,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:420,
                y:200,
            },
            size:{
                width:650,
                height:10,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:20,
                y:370,
            },
            size:{
                width:10,
                height:50,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
    ],
    circle:[],
    polygon:[],
    trapezoid:[],
    endPoint:{
        type:'rectangle',
        position:{
            x:720,
            y:50,
        },
        size:{
            width:40,
            height:40,
        },
    },
    frame:{
        up:false,
        down:false,
        left:false,
        right:false,
    },
};

Level.level5={
    player:{
        type:'rectangle',
        position:{
            x:750,
            y:300,
        },
        size:{
            width:30,
            height:30,
        },
    },
    rectangle:[
        {
            position:{
                x:715,
                y:400,
            },
            size:{
                width:20,
                height:400,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:750,
                y:500,
            },
            size:{
                width:40,
                height:80,
            },
            option:{
                density:5,
                render:Config.body.dynamic.render,
            },
        },
    ],
    circle:[
        {
            position:{
                x:300,
                y:300,
            },
            radius:40,
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:30,
                y:30,
            },
            radius:200,
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:500,
                y:800,
            },
            radius:300,
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
    ],
    polygon:[],
    trapezoid:[
        {
            position:{
                x:740,
                y:110,
            },
            size:{
                width:200,
                height:200,
            },
            slope:5,
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
    ],
    endPoint:{
        type:'rectangle',
        position:{
            x:250,
            y:550,
        },
        size:{
            width:40,
            height:40,
        },
    },
    frame:{
        up:true,
        down:false,
        left:false,
        right:true,
    },
};

Level.level6={
    player:{
        type:'rectangle',
        position:{
            x:100,
            y:100,
        },
        size:{
            width:40,
            height:40,
        },
    },
    rectangle:[

        {
            position:{
                x:170,
                y:280,
            },
            size:{
                width:10,
                height:200,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:620,
                y:280,
            },
            size:{
                width:10,
                height:200,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:620,
                y:70,
            },
            size:{
                width:10,
                height:200,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:170,
                y:70,
            },
            size:{
                width:10,
                height:200,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:170,
                y:435,
            },
            size:{
                width:10,
                height:90,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:620,
                y:435,
            },
            size:{
                width:10,
                height:90,
            },
            option:{
                isStatic:true,
                render:Config.body.static.render,
            },
        },
        {
            position:{
                x:350,
                y:180,
            },
            size:{
                width:560,
                height:10,
            },
            option:{
                density:10,
                render:Config.body.dynamic.render,
            },
        },
        {
            position:{
                x:440,
                y:380,
            },
            size:{
                width:560,
                height:10,
            },
            option:{
                density:10,
                render:Config.body.dynamic.render,
            },
        },
        {
            position:{
                x:680,
                y:350,
            },
            size:{
                width:100,
                height:10,
            },
            option:{
                density:0.5,
                frictionAir:0.9,
                render:Config.body.dynamic.render,
            },
        },
    ],
    circle:[],
    polygon:[],
    trapezoid:[],
    endPoint:{
        type:'rectangle',
        position:{
            x:700,
            y:100,
        },
        size:{
            width:40,
            height:40,
        },
    },
    frame:{
        up:true,
        down:false,
        left:true,
        right:true,
    },
};