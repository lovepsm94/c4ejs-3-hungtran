let weight = prompt('nhập cân nặng: ');
let height = prompt('nhập chiều cao: ');
let bmi = (weight/height/height).toFixed(1);

if (bmi < 18.5){
    alert('bạn gầy');
}
else if (bmi <= 24.9){
    alert('bạn bình thường')
}
else if (bmi <= 29.9){
    alert('bạn hơi béo')
}
else if (bmi <= 34.9){
    alert('bạn béo phì cấp độ 1')
}
else if (bmi <= 39.9){
    alert('bạn béo phì cấp độ 2')
}
else{
    alert('bạn béo phì cấp độ 3')
}