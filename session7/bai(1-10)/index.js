//bai 1: 1-d, 2-a, 3-c, 4-b
//bai 2:
const divTimer = document.getElementById('timer');
function showTime() {
    let clock = new Date();
    divTimer.textContent = clock.toLocaleTimeString();
}
setInterval(showTime, 1000);
// bai 3: bien let va var khong ton tai sau khi ra khoi function

//bai 4: 
const arrLi = document.getElementsByTagName('li');
console.log(arrLi[0]);
for (let i = 0; i < arrLi.length; i++){
    console.log(arrLi[i]);
}

//bai 5:
const arrSingers = document.getElementsByClassName('singer');
console.log(arrSingers[1]);
for (let i = 0; i < arrSingers.length; i++) {
    console.log(arrSingers[i]);
}
//bai 6: 
const el = document.getElementById('div-02');
el.remove(); // Removes the div with the 'div-02' id

//bai 7:
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
btn1.addEventListener('click', (e) => {
    console.log(e.target);
})
//e.target chinh la cai btn1

const x = document.getElementsByTagName('input');
x[0].addEventListener('keydown', (e) => {
    console.log(e.key);
})
//e.key la cai phim nguoi dung bam xuong

//bai 8, 9, 10:
function a(name) {alert(`im ${name} and i wish i can fly`)};
a('hung');

function b(name, wish) {
    alert (`Hi ${name}, You wish ${wish}`);
}
b('hung', 'can fly');
function c(name, wish) {
    if(wish === '') alert('missing wish')
    else alert (`Hi ${name}, You wish ${wish}`);
}
let n = prompt('your name?');
let w = prompt('your wish?');
c(n, w);

  