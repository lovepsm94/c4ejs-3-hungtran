// bai 1: value của x: name, price, brand, color => x là các property trong product
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
    };
for (let x in product) {
    console.log(`${x}: ${product[x]}`);
}

//bai 2:
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
    };
let {subject, assignTo, dueDate, } = task;
console.log(subject);
console.log(assignTo);
console.log(dueDate);

//bai 3:
// lớp ngoài cùng là object
// hits là array
// không hiểu câu hỏi lắm, click vào dấu mũi tên là nhìn được ngay thôi?


//bài 4:
let keyWords = {
    debug: 'The process of figuring out why your program has a certain error andhow to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
    defect: 'The formal word for ‘error’',
    pm: 'The short version of Project Manager, the person in charge of the final result of a project',
    ui: 'UI means User Interface,  is the processesto define how your products looks and feels',
    ux: 'UX mean User Experience,  is the processesto define how your products looks and feels'
};
alert('Hi there, this is dev dictionary');

//bai 5
let keyWord = prompt('Enter a keyword');
if (keyWords[keyWord] === null || keyWords[keyWord] === undefined) {
        alert(`We can't find your word : ${keyWord}`)
} else {
        alert(`${keyWord} \n ${keyWords[keyWord]}`);
}

//bai 6:
while(true){
    alert('Hi there, this is dev dictionary');
    let keyWord = prompt('Enter a keyword');
    if (keyWords[keyWord] === null || keyWords[keyWord] === undefined) {
        alert(`We can't find your word : ${keyWord}`)
    } else {
        alert(`${keyWord} \n ${keyWords[keyWord]}`);
    }
    if (keyWords[keyWord] === null || keyWords[keyWord] === undefined) {
        let explanation  = prompt(`We can't find your word : ${keyWord}, leave your explanation`);
        alert('done');
        keyWords[keyWord] = explanation;
    } else {
        alert(`${keyWord} \n ${keyWords[keyWord]}`);
    }
}

//bai 7-11:
const products = [
    {Name: 'Xiaomi portable charger 20000mah', Brand: 'Xiaomi', Price: 428, Color: 'White', Category: 'Charger'},
    {Name: 'VSmart Active 1', Brand: 'VSmart', Price: 5487, Color: 'Black', Category: 'Phone'},
    {Name: 'IPhone X', Brand: 'Apple', Price: 21490, Color: 'Gray', Category: 'Phone'},
    {Name: 'Samsung Galaxy A9', Brand: 'Samsung', Price: 8490, Color: 'Blue', Category: 'Phone'}
];

//Print/log name and price of all the products out
for (let i = 0; i < products.length; i++){
    console.log('-------------------------------------------------');
    console.log(`Name: ${products[i].Name}`);
    console.log(`Price: ${products[i].Price}`);
}

//Write a script printing/logging out the products based on category input by users

let category = prompt('Enter your category');
for (let i = 0; i < products.length; i++){
    if (products[i].Category === category) {
        console.log('-----------------------------------------------------');
        console.log(`Name: ${products[i].Name}`);
        console.log(`Price: ${products[i].Price}`);
    }
}

/*Write a script printing/logging out the products with their number, then print/logging out
the details of a product with its position entered by users */

for (let i = 0; i < products.length; i++){
    console.log(`#${i+1}. ${products[i].Name}`);
    console.log(`    Price: ${products[i].Price}`);
}
let pos = prompt('Enter product position');
for (let product in products[pos-1]){
    console.log(`${product}: ${products[pos-1][product]}`);
}

//Add providers to each product And printing/logging out all of the products

products[0].Providers = ['Phukienzero', 'Dientuccc'];
products[1].Providers = ['Tgdd', 'Dgdhn', 'Vhstore'];
products[2].Providers = 'Tgdd';
products[3].Providers = 'Tgdd';
for (let i = 0; i < products.length; i++){
    console.log(`#${i+1}. ${products[i].Name}`);
    console.log(`    Price: ${products[i].Price}`);
    console.log(`    Provider: ${products[i].Providers}`);
}

//bai 12:
let providers = prompt('Enter provider');
for (let i = 0; i < products.length; i++){
    if (products[i].Providers.includes(providers)){
        console.log('-------------------------------');
        for (let product in products[i]){
            console.log(`${product}: ${products[i][product]}`);
        }
    }
}

//Bai 13: Write a script to store and process the learning tasks to become a front-end developer
let tasks = [
    {Task: 'HTML', Complete: false},
    {Task: 'CSS', Complete: false},
    {Task: 'Basic of JavaScript', Complete: false},
    {Task: 'Node Package Manager (npm)', Complete: false},
    {Task: 'Git', Complete: false}
];
//13.1
console.log('Hi there, this is your learning tasks to front-end developer career: ');
for (let i = 0; i < tasks.length; i++){
    console.log(`${i+1}. ${tasks[i].Task}`);
    console.log(`   Complete: ${tasks[i].Complete}`);
}
//13.2 - 13.5
while(true){
    let command = prompt('Enter your command (New, Delete, Update, Complete');
    if (command.toLocaleLowerCase() === 'new'){
        let task = prompt('Enter new task: ');
        tasks.push({Task: task, Complete: false})
    }else if(command.toLowerCase() === 'update'){
        let pos = prompt('Enter position: ');
        let title = prompt('Enter new title');
        tasks[pos-1].Task = title;
    }else if (command.toLowerCase() === 'complete'){
        let pos = prompt('Enter position: ');
        tasks[pos-1].Complete = true;
    }else if (command.toLowerCase() === 'delete'){
        let pos = prompt('Enter position: ');
        tasks.splice(pos-1, 1);
    }else {
        alert('This command is not supported');
    }
    console.log('Hi there, this is your learning tasks to front-end developer career: ');
    for (let i = 0; i < tasks.length; i++){
        console.log(`${i+1}. ${tasks[i].Task}`);
        console.log(`   Complete: ${tasks[i].Complete}`);
    } 
}

//13.6:
console.log('Hi there, this is your learning tasks to front-end developer career: ');
for (let i = 0; i < tasks.length; i++){
    let x = ' ';
    if (tasks[i].Complete === true){
        x = 'X';
    } 
    console.log(`${i+1}. [${x}] ${tasks[i].Task}`);
}

