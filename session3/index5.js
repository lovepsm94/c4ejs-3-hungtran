//bai 4: mo phong cua hang quan ao
let items = ['Jeans','T-Shirt', 'Socks'];
while (true) {
let x = items.length;
let n = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?').toUpperCase();
if (n === 'C'){
    let message = 'The current items are: ';
    for (let i = 0; i < x; i++){
        message += `\n ${i+1}. ${items[i]}`;
    }
    alert(message);
}
else if (n === 'R') {
    let newItem = prompt('Enter the name of new item: ');
    items.push(newItem);
    alert('Done');
}
else if (n === 'U'){
    let i = Number(prompt('Enter the position you want to update'));
    let newName = prompt('Enter the new name');
    items[i - 1] = newName;
    alert('Done');
}
else if (n === 'D'){
    let i = Number(prompt('Enter the position you want to detele'));
    items.splice(i - 1, 1);
    alert('Done');
}
else {
    alert('This command is not supported')
}
}