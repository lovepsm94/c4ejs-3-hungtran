// bai 6: Write a script to ask users enter a sequence of numbers, the Numbers are separated by
// commas, calculate the sum of the numbers and show it to users

{
let strNumbers = prompt('Enter the squence of number, separated by commas (,)');
let arrNumber = strNumbers.split(',');
let n = arrNumber.length;
let sum = 0;
for (let i = 0; i <n; i++){
    sum += Number(arrNumber[i]);
}
alert(`The sum of them is ${sum}`);
}

// Write a script asking users to enter a sequence of numbers, the numbers are separated
// by commas, find the smallest number and log it out to users
{
let strNumbers = prompt('Enter the squence of number, separated by commas (,)');
let arrNumber = strNumbers.split(',');
let min = Math.min(...arrNumber);
alert(`The smallest number is ${min}`);
}

// Create an array containing at least 5 numbers, then ask users enter a number, perform a
// search to look for the number in the array, if the number is found, tell user that with the
// index of it in the array, if not, also tell them so

const arr = [3, 4, 6, -9, 10, -88, 2];
let n = Number(prompt('Enter a number'));
if (arr.includes(n) === false){
    alert(`${n} is not found in my array`);
}
else {
    alert(`${n} is found in my array at index ${arr.indexOf(n)}`);
}
