//bai 9:
clear();
const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
for (let i = 1; i < colors.length; i++){
  color(colors[i]);
  for (let j = 0; j < 4; j++){
    fd(20 + (i - 1)*20);
    rt(90);
  }
}