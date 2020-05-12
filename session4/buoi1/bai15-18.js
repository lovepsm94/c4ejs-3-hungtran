//bai 15: 
clear();
const pos = {
x: 200,
y: 50,
}
rt(90);
penup();
fd(pos.x);
rt(-90);
fd(pos.y);
//bai 16
clear();
const square = {
    x: 100,
    y: 50,
    width: 20,
    };
rt(90);
penup();
fd(square.x);
rt(-90);
fd(square.y);
pendown();
for(let i = 0; i < 4; i++){
    fd(square.width);
    rt(90);
}
//bai 17
clear();
const rect = {
    x: 100,
    y: 50,
    width: 20,
    height: 40,
    };
rt(90);
penup();
fd(rect.x);
rt(-90);
fd(rect.y);
pendown();
for(let i = 0; i < 2; i++){
    fd(rect.height);
    rt(90);
    fd(rect.width);
    rt(90);
}

//bai 18:
const cmds = [
    {
        shape: 'square',
        x: 20,
        y: 40,
        width: 50,
    },
    {
        shape: 'rect',
        x: 8,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 70,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 10,
        y: 20,
        width: 70,
        height: 20,
    },
    {
        shape: 'square',
        x: 25,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 33,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 50,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 58,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 40,
        y: 25,
        width: 8,
    },
    {
        shape: 'square',
        penWidth: 1,
        x: 500,
        y: 500,
        width: 15,
    },
]
clear();
for (let i = 0; i < cmds.length; i++){
    rt(90);
    penup();
    fd(cmds[i].x);
    rt(-90);
    fd(cmds[i].y);
    pendown();
    if (cmds[i].shape === 'square'){
        for(let j = 0; j < 4; j++){
            fd(cmds[i].width);
            rt(90);
        }
        home();
    }else {
        for(let k = 0; k < 2; k++){
            fd(cmds[i].height);
            rt(90);
            fd(cmds[i].width);
            rt(90);
        }
        home();
    }
}