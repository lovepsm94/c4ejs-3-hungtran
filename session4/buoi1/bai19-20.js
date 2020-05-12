// bai 19: Add circle to the command 
const circle = {
    shape: 'circle',
     x: 100,         
     y: 50,         
     radius: 30
};
rt(90);
penup();
fd(circle.x);
rt(-90);
fd(circle.y);
const n = 9999;
rt(-90);
fd(circle.radius); 
rt(90);
pendown();
for(i = 0; i<n; i++){
  if(i==0||i==(n-1)) fd(Math.PI*circle.radius/n);
  else fd(2*Math.PI*circle.radius/n);
  rt(180 - (n-2)*180/n);
}

//bai 20:
const cmds = [
    {
        shape: 'circle',
        x: 0,
        y: -20,
        radius: 60,
    },
    {
        shape: 'circle',
        x: 0,
        y: 80,
        radius: 40,
    },
    {
        shape: 'circle',
        x: -75,
        y: 10,
        radius: 20,
    },
      {
        shape: 'circle',
        x: 75,
        y: 10,
        radius: 20,
    },
    {
        shape: 'square',
        x: -65,
        y: -100,
        width: 30,
    },
      {
        shape: 'square',
        x: 38,
        y: -100,
        width: 30,
    },
  
  {
        shape: 'rect',
        x: -30,
        y: 80,
        width: 20,
        height: 4
    },
    {
        shape: 'rect',
        x: 10,
        y: 80,
        width: 20,
        height: 4
    },
      {
        shape: 'rect',
        x: -10,
        y: 50,
        width: 20,
        height: 6
    },
  {
        shape: 'square',
        x: 500,
        y: 500,
        width: 20,
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
    }else if (cmds[i].shape === 'rect'){
        for(let k = 0; k < 2; k++){
            fd(cmds[i].height);
            rt(90);
            fd(cmds[i].width);
            rt(90);
        }
        home();
    }
    else {
        penup();
        const n = 9999;
        rt(-90);
        fd(cmds[i].radius); 
        rt(90);
        pendown();
        for(l = 0; l<n; l++){
        if(l==0||l==(n-1)) fd(Math.PI*cmds[i].radius/n);
        else fd(2*Math.PI*cmds[i].radius/n);
        rt(180 - (n-2)*180/n);
        }
    }
}

