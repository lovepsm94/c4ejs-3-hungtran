//Use JS Turtle, to draw the following shapes
//A square
clear();
for(let i = 0; i<4; i++) {
  fd(100);
  rt(90);
     }
//A triangle
clear();
for(i = 0; i<3; i++) {
  fd(100);
  rt(120);
}

//A pentagon
clear();
for(i = 0; i<5; i++) {
  fd(100);
  rt(72);
}

//A hexagon
for(i = 0; i<6; i++) {
    fd(100);
    rt(60);
}

//the number of polygon’s edges entered by users
clear();
let n = prompt('Enter number of edges');
for(i = 0; i<n; i++){
    fd(100);
    rt(180 - (n-2)*180/n);
}

// draw n polygons, n entered by users
clear();
n = Number(prompt('How many polygon?'));
for(i=3; i<(n+3);i++){
for( let j = 0; j<i; j++){
    fd(100);
    rt(180 - (i-2)*180/i);
}
}