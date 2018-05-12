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
            stiffness: 1,
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
    rectangle:{
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

//Use event listener to replace inline HTML
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('start').addEventListener('click',function(){
        Start();
    });
    document.getElementById('stop').addEventListener('click',function(){
        Stop();
    })
    Config.level = document.getElementById("selection").value;
});
document.getElementById('selection').addEventListener('change',function(){
    Config.level = document.getElementById("selection").value;
});