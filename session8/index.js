const nutCong = document.getElementById('cong');
const nutTru = document.getElementById('tru');
let value = Number(document.getElementsByTagName('span')[0].innerHTML);
console.log(value);
nutCong.addEventListener('click', () => {
    value++;
    console.log(value);
    document.getElementsByTagName('span')[0].innerHTML = value;
});
nutTru.addEventListener('click', () => {
    value--;
    document.getElementsByTagName('span')[0].innerHTML = value;
})


// const startBtn = document.getElementById('start_btn');
// const stopBtn = document.getElementById('stop_btn');
// startBtn.addEventListener('click', () => {
//     let x = document.getElementsByTagName('input')[0].value;
//     let xx = setInterval(() => {
//         x--;
//         document.getElementsByTagName('div')[0].innerHTML = x;
//         if(x === -1) {
//             clearInterval(xx);
//             document.getElementsByTagName('div')[0].innerHTML = 'timer up!!'
//         }
//         stopBtn.addEventListener('click', () => {
//             clearInterval(xx);
//             document.getElementsByTagName('div')[0].innerHTML = 'stopped'
//         })
//     },1000)
    
// });

