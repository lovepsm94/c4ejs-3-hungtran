let a = prompt('nhap a');
let b = prompt('nhap b');
let c = prompt('nhap c');
let delta = b*b - 4*a*c;
if (delta < 0){
    alert('phuong trinh vo nghiem')
}
else if (delta === 0){
    alert('phuong trinh co 1 nghiem duy nhat');
}
else {
    alert('phuong trinh co 2 nghiem phan biet')
}