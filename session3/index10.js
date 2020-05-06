//bai tap phan study

//bai 10.1
{
const numbers = [2, 3 , 92, 11, 354, 1];
let numbers1 = [];
for (let i = 0; i < numbers.length; i++){
    numbers1.push('<' + numbers[i] + '>');
}
console.log(numbers1);
}
//bai 10.2
{
const numbers = [2, 3 , 92, 11, 354, 1];
let numbers1 = numbers.map(number => '<' + number + '>');
console.log(numbers1);
}
//bai 11.1
{
const numbers = [2, 3 , 92, 11, 354, 1];
let numbers1 = [];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i]%2 === 1){
        numbers1.push(numbers[i]);
    }
}
console.log(numbers1);
}
//bai 11.2
{
const numbers = [2, 3 , 92, 11, 354, 1];
let numbers1 = numbers.filter(number => number%2 === 1);
console.log(numbers1);
}