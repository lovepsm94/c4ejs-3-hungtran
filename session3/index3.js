/*In ra màn hình 1 Array chứa tên của 3 cầu thủ bóng đá: Ronaldo, Messi, Neymar.
Hỏi người dùng có muốn nhập thêm cầu thủ không bằng cách nhập "Y" hoặc "N".
Nếu người dùng nhập "Y", hỏi tiếp tên cầu thủ muốn nhập, sau đó thêm cầu thủ mới
vào Array ban đầu và in Array mới ra màn hình
Nếu người dùng nhập "N", in ra màn hình câu "Good Bye!"*/

let players = ['Ronaldo', 'Messi', 'Neymar'];
console.log(players);
let n = prompt('Ban co muon them cau thu khong (Y/N)').toUpperCase();
if (n ==='Y'){
    let player = prompt('nhap ten cau thu');
    players.push(player);
    console.log(players);
}
else {
    alert('Good Bye!');
}


/*Tạo ra 1 Array chứa tên của các hãng xe: Honda, Suzuki, Yamaha, Kawasaki, Ducati, Triumph.
In ra màn hình "Ducati"*/

let cars = ['Honda', 'Suzuki', 'Yamaha', 'Kawasaki', 'Ducati', 'Triumph'];
console.log(cars[4]);

// Tạo ra 1 Array chứa tên của các hãng xe ô tô: Audi, Bentley, BMW, Bugatti, Ferrari, Ford.
// In ra màn hình tất cả các hãng xe có trong Array vừa tạo.

let xe = ['Audi', 'Bentley', 'BMW', 'Bugatti', 'Ferrari', 'Ford'];
for (let i = 0; i < xe.length; i++){
    console.log(xe[i]);
}

//chuong trinh mo phong cua hang quan ao

let items = [];
let n = prompt('Welcome to our shop, what do you want (C, R, U, D)?').toUpperCase();
if (n === 'C'){
    console.log(`Our item: ${items}`);
}
if (n === 'R') {
    let item = prompt('Enter new item: ');
    items.push(item);
    console.log(`Our item: ${items}`);
}
if (n === 'U'){
    let position = Number(prompt('Update position?'));
    let newItem = prompt('New item?');
    items.splice(position - 1, 0, newItem);
    console.log(`Our item: ${items}`);
}
if (n === 'D'){
    let position = Number(prompt('Delete position?'));
    items.splice(position - 1, 1);
    console.log(`Our item: ${items}`);
}
