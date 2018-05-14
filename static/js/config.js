//Include the config for engine, render,etc.
let Config={
    canvas:{
        width:800,
        height:600,
    },
    engine:{
        gravity:{
            x:0,
            y:1,
        },
    },
    render:{
        options:{
            width: 800,
            height: 600,
            showAngleIndicator: false, //show each item's angle
            showVelocity: true,
            wireframes: false, // this will set item can fill color or not,important
            background: 'black',
        },
        element:document.getElementById('game'),  
    },
    frame:{
        offset:10,
        thickness:60,
        options:{
            isStatic: true,
            render:{
                strokeStyle: 'Dimgray',
                fillStyle:'transparent',
                lineWidth:2,
            },
        },
    },
    mouse:{
        options:{
            stiffness: 0.1,
            render: {
                visible: false
            }
        }
    },
    level:'level1',
    player:{
        options:{
            render: {
                strokeStyle: 'yellow',
                fillStyle: 'transparent',
                lineWidth: 2,
            },
            label:'player',
        },
    },
    endPoint:{
        options:{
            isSensor:true,
            isStatic:true,
            render: {
                strokeStyle: 'red',
                fillStyle: 'transparent',
                lineWidth: 2,
            },
            label:'endPoint',
        }
    },
    body:{
        dynamic:{
            render: {
                strokeStyle: 'SaddleBrown',
                fillStyle: 'transparent',
                lineWidth: 2,
            },
        },
        static:{
            render: {
                strokeStyle: 'Dimgray',
                fillStyle: 'transparent',
                lineWidth: 2,
            },
        },
        undrag:{
            render: {
                strokeStyle:'Blue',
                fillStyle: 'transparent',
                lineWidth:2,
            },
        },
        damage:{
            render:{
                strokeStyle:'Purple',
                fillStyle: 'transparent',
                lineWidth:2,
            },
        },
    },
};
