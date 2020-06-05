async function getData() {
    let response = await fetch('https://sheetdb.io/api/v1/pjzxoijmk9an5');
    let data = await response.json();
    return data;
}
const addBtn = document.getElementById('add_btn');
const itemInput = document.getElementsByTagName('input')[0];
const ol = document.getElementsByTagName('ol')[0];
async function showListItems(){
    ol.innerHTML = '';
    const items = await getData();
    for (let i = 0; i < items.length; i++) {
        ol.insertAdjacentHTML('beforeend', `<li>${items[i].name}<button onclick="deleteItem('${items[i].id}')">x</button></li>`);
    }
}
showListItems();
function makeId(length) {
    let id = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       id += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return id;
 }
addBtn.addEventListener('click', () => {
    async function postItem() {
        let id = makeId(10);
        const newItem = {"data":[{ "id": id, "name": itemInput.value }]}
        const response = await fetch('https://sheetdb.io/api/v1/pjzxoijmk9an5', {
            body: JSON.stringify(newItem),
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
        });
        showListItems();
        
    }
    postItem();
    itemInput.value = '';
});
async function deleteItem(id) {
    const response = await fetch(`https://sheetdb.io/api/v1/pjzxoijmk9an5/id/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
    });
    showListItems();
    itemInput.value = '';
}
function searchItem() {
    itemInput.addEventListener('keydown', async function xx() {
        const items = await getData();
        let x = [];
        for(let i = 0; i < items.length; i++){
            let itemsLowerCase = items[i].name.toLowerCase();
            let characters = itemInput.value.toLowerCase();
            if (itemsLowerCase.includes(characters)) {
                x.push({id : items[i].id, name : items[i].name});
            }
        }
        ol.innerHTML = '';
        for (let i = 0; i < x.length; i++) {
            ol.insertAdjacentHTML('beforeend', `<li>${x[i].name}<button onclick="deleteItem('${x[i].id}')">x</button></li>`);
        }
    })
}
searchItem();
