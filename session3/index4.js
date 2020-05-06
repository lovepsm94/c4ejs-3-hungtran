// bai 1: Variable swap
{
let a = 1;
let b = 2;

let c = a;
a = b;
b = c;
console.log(`${a}, ${b}`);//swap lan dau ket qua 2 1

[a, b] = [b, a];
console.log(`${a}, ${b}`);//swap lan 2 a va b ve gia tri cu
}
//bai 2: Split String into Array
{
const s = 'Hello beauty there';
const a = s.split(' ');
console.log(a);
}
//bai 3:
{
const a = [4, 5, 7, -8];
console.log(...a);
}

