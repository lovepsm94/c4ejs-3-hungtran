const items = ['Backpack', 'MiBand watch', 'Ring'];
const itemListUl = document.getElementById('item_list_ul');
const addBtn = document.getElementById('add_btn');
const itemInput = document.getElementById('item_input');

for (let i = 0; i < items.length; i++){
    console.log(items[i]);
}
function addItem(x) {
    itemListUl.insertAdjacentHTML("beforeend", `<li><span>${items[x]}</span><button id="${x}" class="remove_btn">Remove</button></li>`);
}
for (let i = 0; i < items.length; i++){
    addItem(i);
    console.log();
}
addBtn.addEventListener('click', () => {
    
    items.push(itemInput.value);
    addItem(items.length-1)
    itemInput.value = ''; 
});

const removeBtn = document.getElementsByClassName('remove_btn');
const li = document.getElementsByTagName('li');

let id = -1;
for (let i = 0; i < items.length; i++) {
    removeBtn[i].onclick = function(e) {
        id = Number(this.id);
    };
}
if (id !== -1) li[id].remove();

  