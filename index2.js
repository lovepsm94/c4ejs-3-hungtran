/* write a program asking user their age , and then decide if they
are old enough to view a 14+ content */

let age = prompt('how old are you?');
if (age >= 14) alert('Enjoy!');
else alert('You are not old enough to view this content');

/*Write a program asking user to enter a number, x, then check if x is in the lower half or
higher half of 0 - 9 range */

let x = prompt('Enter a number');
if (x < 4.5) alert ('Lower  half of 9');
else alert ('Higher half of 9');

/*Write a program asking user to enter two numbers, x and n, then check if x is in lower
half or higher half of n */

x = prompt('x = ');
let n = prompt('n = ');
if (x < n/2) alert (`${x} is lower  half of ${n}`);
if (x> n/2) alert (`${x} is higher  half of ${n}`);
if (x == n/2) alert (`${x} = ${n}/2`);

//Write a script to check if a number is even (divisible by 2) or odd number
x = prompt ('x = ');
if (x%2 == 0) alert(`${x} is an even number`);
else alert(`${x} is an odd number`);


//Write a program to print out 6 L’s and H’s, half L’s, half H’s
let i = 0;
while(i < 3) {
    console.log('L');
    i++;
}
i = 0;
while(i < 3) {
    console.log('H');
    i++;
}

//n L’s and H’s in total, n entered by user

n = prompt('Enter total number');
x = Math.floor(Math.random() * n);
i = 0;
while (i < x) {
    console.log('L');
    i++;
}
i = 0;
while (i < (n-x)) {
    console.log('H');
    i++;
}

//8 1’s and 0’s in total, consecutively
i = 0;
while(i < 8) {
    console.log(0);
    console.log(1);
    i++;
}

//n 1’s and 0’s in total, consecutively, n entered by user
n = prompt('n = ');
i = 0;
while(i < n) {
    console.log(0);
    console.log(1);
    i++;
}

//Write a script to calculate the BMI (Body Mass Index) of a person,
let weight = prompt('Your weight?');
let height = prompt('Your height?');
let bmi = weight/height/height;
alert(`Your BMI is ${bmi}`)
if(bmi < 16) alert('You are Severely underweight');
if(16 <= bmi && bmi < 18.5  ) alert ('You are Underweight');
if(18.5 <= bmi && bmi <25) alert ('You are Nomal');
if(25 <= bmi && bmi < 30) alert ('You are Overweight');
if( bmi >=30) alert ('You are Obese');


