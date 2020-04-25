//var và const là 2 cách khai báo biến trong js
//let chỉ có tác dụng trong 1 scope, còn var rộng hơn, có thể khai báo 2 biến trùng tên với var
//const không thể thay đổi giá trị của biến, còn let thì có thể

//boolean là 1 kiểu dữ liệu  trong js, chỉ có 2 giá trị true hoặc false

//Write a program to print out 6 numbers, starting from 0 (no user input)

let i = 0;
while(i < 7) {
    console.log(i);
    i++;
}
    

//n numbers, starting from 0, n entered by user

let n = Number(prompt('Enter a number'));
 i = 0;
while(i < n) {
    console.log(i);
    i++;
}

//A sequence of numbers, starting from 3, ending before n, n entered by user

i = 3;
n = Number(prompt('n = '));
while(i < n) {
    console.log(i);
    i++;
}

//A sequence of numbers, starting from c, ending before n, c and n entered by user

let c = Number(prompt('c = '));
n = Number(prompt('n = '));
while (c < n) {
    console.log(c);
    c++;
}

//A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user


c = Number(prompt('c = '));
n = Number(prompt('n = '));
while (c < n) {
    console.log(c);
    c += 3;
}

/*A sequence of numbers, starting from c, ending before n, stepping by s. c, n and
s entered by user */

c = Number(prompt('c = '));
n = Number(prompt('n = '));
s = Number(prompt('s = '));
while (c < n) {
    console.log(c);
    c += s;
}


