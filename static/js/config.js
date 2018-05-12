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
        option:{
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
        setting:{
            isStatic: true,
            render:{
                strokeStyle: 'Dimgray',
                fillStyle:'transparent',
                lineWidth:2,
            },
        },
    },
    mouse:{
        setting:{
            stiffness: 0.1,
            render: {
                visible: false
            }
        }
    },
    level:'level1',
    player:{
        setting:{
            render: {
                strokeStyle: 'yellow',
                fillStyle: 'transparent',
                lineWidth: 2,
            },
            label:'player',
        },
    },
    endPoint:{
        setting:{
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
    },
};
