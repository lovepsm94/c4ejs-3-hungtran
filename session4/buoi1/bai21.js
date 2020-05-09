//bai21:

const oldData = {
    firedRice: {
    Price: 30,
    vnName: 'Com rang dua bo'
    },
    noddle: {
    price: 20,
    vnName: 'My tom chanh'
    },
    pho: {
    price: 35,
    vnName: 'Pho bo tai chin'
    },
};
//cach 1: xoa thong thuong
delete oldData.noddle;
console.log(oldData);

//cach 2:
let {firedRice, pho} = oldData;
let newData = {firedRice, pho};
console.log(oldData);
console.log(newData);

//cach 3: clone oldData ra roi xoa phan can thiet

let newData = Object.assign({}, oldData);
delete newData.noddle;
console.log(newData);
console.log(oldData);

